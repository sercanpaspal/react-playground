/* eslint-disable react/prop-types */
import React from 'react';
import { useEffect, useRef } from 'react';

const Highlight = ({ children, ...props }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.classList.remove('highlight');
    void ref.current.offsetWidth;
    ref.current.classList.add('highlight');
  });

  const onAnimationEnd = () => ref.current.classList.remove('highlight');

  return (
    <div ref={ref} onAnimationEnd={onAnimationEnd} {...props}>
      {children}
    </div>
  );
};

export default Highlight;
