export const AUTH_LOGIN = "/login";

export const AUTH_FORGOT_PASSWORD = `/forgot-password`;

export const AUTH_CHANGE_PASSWORD = `/change-password`;

export const AUTH_GATEWAY_ROUTES = [
  AUTH_LOGIN,
  AUTH_FORGOT_PASSWORD,
] as const;

export const LEGACY_AUTH_REDIRECTS: Record<string, string> = {};
