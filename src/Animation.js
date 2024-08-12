import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { motion } from 'framer-motion';

const Animation = () => {
  const [inProp, setInProp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <CSSTransition in={inProp} timeout={500} classNames="fade">
        <div className="box">Hello, World!</div>
      </CSSTransition>
      <button onClick={() => setInProp(!inProp)} className="btn btn-success">
        Toggle
      </button>

      
    </div>
  );
};

export default Animation;



