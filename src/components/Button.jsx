import React from 'react'

const Button = ({ contactRef, name, isBeam = false, containerClass}) => {
  
  const handleButtonClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button className={`btn ${containerClass}`}  onClick={handleButtonClick} >
        {isBeam && (
            <span className='relative flex h-3 w-3'>
                <span className='btn-ping'/>
                <span className='btn-ping_dot'/>
            </span>
        )}
        {name}
    </button>
  )
}

export default Button