import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  // Variant türüne göre buton renklerini belirliyoruz
  const baseStyles = 'px-6 py-3 rounded-xl font-orbit font-bold tracking-wider transition-all duration-200 transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-nexusPurple text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] hover:bg-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]',
    secondary: 'border border-nexusNeon/50 text-nexusNeon bg-transparent hover:bg-nexusNeon/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]',
    danger: 'bg-rose-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.4)] hover:bg-rose-500 hover:shadow-[0_0_25px_rgba(225,29,72,0.6)]'
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
