import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'circle' | 'rectangle';
}

const LoadingSkeleton = ({ className, variant = 'rectangle', ...props }: SkeletonProps) => {
  return (
    <div
      className={cn(
        'animate-pulse bg-slate-200 dark:bg-slate-800',
        variant === 'circle' ? 'rounded-full' : 'rounded-md',
        className
      )}
      {...props}
    />
  );
};

export default LoadingSkeleton;
