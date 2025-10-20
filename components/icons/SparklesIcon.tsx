
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SparklesIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3L9.5 8.5L4 10L9.5 11.5L12 17L14.5 11.5L20 10L14.5 8.5L12 3Z" />
    <path d="M5 21L6 17" />
    <path d="M19 21L18 17" />
  </svg>
);
