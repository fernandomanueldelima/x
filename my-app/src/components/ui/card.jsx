import React from 'react';

const Card = ({ title, content, children }) => {
  return (
    <div className="bg-muted rounded-2xl p-6 shadow-md text-foreground">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {content && <p className="text-sm mb-4">{content}</p>}
      {children}
    </div>
  );
};

export default Card;
