import React from 'react';
import ArrowIcon from './ArrowIcon';

interface IArrowButtonProps {
  direction: string;
  onClick: () => void;
};

const ArrowButton = ({ direction, onClick }: IArrowButtonProps) => (
  <div className="srdp__arrow-button" onClick={onClick}> 
    <ArrowIcon color="#7b848d" className={`srdp__arrow ${direction === 'left' ? 'srdp__arrow--left' : 'srdp__arrow--right'}`} />
  </div>
);

export default ArrowButton;