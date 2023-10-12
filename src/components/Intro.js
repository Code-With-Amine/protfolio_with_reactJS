import React from 'react';
import wave from '../assets/images/wave-haikei.svg';
import '../style/Into.scss';

function AnimateText({text}){
  const textArray = Array.from(text);
  return(
    textArray.map((letter, index) =>(
      <span className = {`letter-${index}__animate`} key={`${letter}-${index}`}>{letter}</span>
    )
  )
  )
}

function Intro() {
const MyName = 'AMINE ABAIDI';
const jobTitle = 'Web Developer'
  return (
    <div className='Intro w-100 h-100'>
      <img className='Intro--wave' src={wave} alt='wave background'/>
      <h1 className='Intro--myname text-center'>I'M {MyName}</h1>
      <h1 className='Intro--jobTitle text-center'>A  <AnimateText text={jobTitle} /></h1>

      </div>
  )
}

export default Intro