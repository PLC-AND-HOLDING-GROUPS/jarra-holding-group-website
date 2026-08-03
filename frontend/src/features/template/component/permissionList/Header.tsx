import React from "react";
import { Shield } from "lucide-react";

export const PermissionHeader: React.FC = () => (
  <div className="flex mb-10 rounded-t-lg items-center justify-between p-6 border-b border-border bg-gradient-to-r from-blue-50 to-indigo-50">
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-blue-100 rounded-lg">
        <Shield className="h-6 w-6 text-secondary" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-heading">
          Permission Management
        </h2>
        <p className="text-sm text-muted">
          Manage and configure system permissions
        </p>
      </div>
    </div>
  </div>
);
