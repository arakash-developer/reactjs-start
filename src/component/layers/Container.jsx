import React from 'react';

const Container = ({children,className}) => {
  return (
    <div className={`max-w-[1600px]  mx-auto  ${className}`}>
        {children}
    </div>
  )
}
// px-3
export default Container;