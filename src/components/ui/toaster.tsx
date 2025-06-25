'use client';

import * as React from 'react';
import { 
  Toast, 
  ToastProvider, 
  ToastViewport, 
  useToast, 
  type ToasterToast 
} from './toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map((toast) => {
        // Ensure variant is either 'default' or 'destructive'
        const toastVariant = toast.variant === 'destructive' ? 'destructive' : 'default';
        
        return (
          <Toast 
            key={toast.id} 
            variant={toastVariant}
            className={toast.className}
            open={toast.open}
            onOpenChange={toast.onOpenChange}
          >
            <div className="grid gap-1">
              {toast.title && <div className="font-medium">{toast.title}</div>}
              {toast.description && (
                <div className="text-sm opacity-90">{toast.description}</div>
              )}
            </div>
            {toast.action}
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
