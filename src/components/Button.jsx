import React from 'react';
import clsx from 'clsx';
import '../scss/App.scss';

export default function Button(props) {
  const { outline, arrow, children, ...rest } = props;
  const classes = clsx({
    button_orange: !outline,
    button_white: outline,
    button_arrow: arrow,
  });
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
