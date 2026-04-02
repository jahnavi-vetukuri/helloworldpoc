import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline";
  onClick?: () => void;
};

export function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
}: ButtonProps) {
  const base =
    "px-6 py-3 rounded-xl font-medium transition-colors text-sm cursor-pointer";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}