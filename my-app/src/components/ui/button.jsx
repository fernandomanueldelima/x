import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '', variant = 'solid', ...props }) => {
  const base = 'px-4 py-2 rounded-lg font-medium transition-colors';
  const styles = variant === 'solid'
    ? 'bg-primary text-foreground hover:bg-primary/80'
    : 'bg-muted text-foreground hover:bg-muted/80 border border-secondary';

  return (
    <button type={type} className={`${base} ${styles} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
