import React from 'react';
import '../style/skills.scss';

function SkillsFiltier({setStackFilter, stackFilter}) {

    const habdelClick = (e)=>{
      setStackFilter(e.target.dataset.stack);
    }

  return (
    <div className='skills-filter py-3 px-2 text-center'>
        <div className={stackFilter === 'all' ? 'active' : ''} onClick={habdelClick} role='button' data-stack = 'all' >All</div>
        <div className={stackFilter === 'front-end' ? 'active' : ''}  onClick={habdelClick} role='button' data-stack = 'front-end'>Front-End</div>
        <div className={stackFilter === 'back-end' ? 'active' : ''}  onClick={habdelClick} role='button' data-stack = 'back-end'>Back-End</div>
        <div className={stackFilter === 'design' ? 'active' : ''}  onClick={habdelClick} role='button' data-stack = 'design'>Design</div>

    </div>
  )
}

export default SkillsFiltier