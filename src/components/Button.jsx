import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
