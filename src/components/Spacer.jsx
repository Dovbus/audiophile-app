import React from 'react';
import useWindowSize from '../Hooks/UseWindowSize';

export default function Spacer(props) {
  let { space, style = {}, children } = props;
  const size = useWindowSize();
  if (size.width <= 768) {
    space = 0.4 * space;
  } else if (size.width <= 1200) {
    space = 0.6 * space;
  } else {
    space = space;
  }
  return (
    <div
      style={{
        marginBottom: space,
        ...style,
      }}
    >
      {children}
    </div>
  );
}