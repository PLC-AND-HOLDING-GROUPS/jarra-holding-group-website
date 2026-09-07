import { toast } from "sonner";

/**
 * Safely extract a human-readable error message from unknown error objects (e.g. RTK Query, Axios, fetch, Error)
 * Avoids exposing stack traces, raw DB dumps, or sensitive internal properties.
 */
export function extractErrorMessage(error: unknown, fallback: string = "An unexpected error occurred. Please try again."): string {
  if (!error) return fallback;

  // If error is already a string
  if (typeof error === "string") return error;

  // RTK Query or Axios style error objects
  if (typeof error === "object") {
    const err = error as Record<string, any>;

    // RTK Query: { data: { message: "..." } } or { data: { error: "..." } }
    if (err.data) {
      if (typeof err.data === "string") return err.data;
      if (typeof err.data.message === "string") return err.data.message;
      if (typeof err.data.error === "string") return err.data.error;
      if (Array.isArray(err.data.errors) && err.data.errors.length > 0) {
        return err.data.errors[0].message || String(err.data.errors[0]);
      }
    }

    // Standard Error object
    if (typeof err.message === "string" && !err.message.includes("Object Object")) {
      // Don't expose ugly runtime traces
      if (err.message.startsWith("Network Error")) return "Network error: Unable to reach the server. Please check your connection.";
      return err.message;
    }

    // Standard status code fallback
    if (typeof err.status === "number") {
      switch (err.status) {
        case 400: return "Bad request. Please verify your input.";
        case 401: return "Unauthorized. Your session may have expired.";
        case 403: return "Forbidden. You do not have permission for this action.";
        case 404: return "Requested resource was not found.";
        case 409: return "Conflict. The resource already exists or is in conflict.";
        case 422: return "Validation failed. Please verify the submitted data.";
        case 500: return "Server error. Please try again later or contact support.";
        default: break;
      }
    }
  }

  return fallback;
}

export interface NotifyOptions {
  id?: string | number;
  description?: string;
  duration?: number;
}

export const notify = {
  success: (message: string, optionsOrDescription?: string | NotifyOptions) => {
    if (typeof optionsOrDescription === "string") {
      return toast.success(message, { description: optionsOrDescription });
    }
    return toast.success(message, optionsOrDescription);
  },
  error: (message: string, errorOrOptions?: unknown) => {
    if (typeof errorOrOptions === "object" && errorOrOptions !== null && ("id" in errorOrOptions || "description" in errorOrOptions)) {
      return toast.error(message, errorOrOptions as any);
    }
    const desc = typeof errorOrOptions === "string" 
      ? errorOrOptions 
      : errorOrOptions ? extractErrorMessage(errorOrOptions) : undefined;
    return toast.error(message, { description: desc });
  },
  warning: (message: string, optionsOrDescription?: string | NotifyOptions) => {
    if (typeof optionsOrDescription === "string") {
      return toast.warning(message, { description: optionsOrDescription });
    }
    return toast.warning(message, optionsOrDescription);
  },
  info: (message: string, optionsOrDescription?: string | NotifyOptions) => {
    if (typeof optionsOrDescription === "string") {
      return toast.info(message, { description: optionsOrDescription });
    }
    return toast.info(message, optionsOrDescription);
  },
  loading: (message: string, options?: { id?: string | number }) => {
    return toast.loading(message, options);
  },
  dismiss: (id?: string | number) => {
    toast.dismiss(id);
  },
  promise: toast.promise,
};

export const showSuccess = notify.success;
export const showError = notify.error;
export const showWarning = notify.warning;
export const showInfo = notify.info;
