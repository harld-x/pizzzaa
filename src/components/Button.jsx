import React from 'react';
import cn from 'classnames';

function Button({ onClick, outline, children, className }) {
  return (
    <button
      onClick={onClick}
      className={cn('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
}
export default Button;
