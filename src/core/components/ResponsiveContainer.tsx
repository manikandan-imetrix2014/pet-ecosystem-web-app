import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

const ResponsiveContainer = ({ className, fluid = false, children, ...props }: ContainerProps) => {
  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        fluid ? 'w-full' : 'max-w-7xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;
