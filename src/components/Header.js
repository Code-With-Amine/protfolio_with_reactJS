import React from 'react'
import underline from "../assets/images/zigzag.svg";

function Header({title}) {
  return (
    <div className='header mx-auto'>
      <h1 className="text-center p-5 Title">{title}</h1>
      <img src={underline} alt='svg line' className='header__underline d-block mx-auto'/>
    </div>
  )
}

export default Header