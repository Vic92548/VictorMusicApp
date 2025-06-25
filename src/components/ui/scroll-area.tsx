'use client';

import * as React from 'react';

type ScrollAreaProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  viewportClassName?: string;
  onScroll?: (e: React.UIEvent<HTMLDivElement>) => void;
};

export function ScrollArea({
  className,
  viewportClassName,
  children,
  onScroll,
  ...props
}: React.PropsWithChildren<ScrollAreaProps>) {
  return (
    <div className={`relative overflow-hidden ${className || ''}`} {...props}>
      <div
        className={`h-full w-full overflow-y-auto ${viewportClassName || ''}`}
        onScroll={onScroll}
      >
        {children}
      </div>
    </div>
  );
}
