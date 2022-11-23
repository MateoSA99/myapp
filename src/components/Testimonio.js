import React from 'react';
import '../stylesheets/Testimonio.css';

function Testimonio(props) {
  return (
    <div className='testimonio-container'>
      <img
      className='testimonio-image'
      src={require(`../images/${props.image}.png`)}
      alt='Emma Photo'/>
      <div className='testimonio-text-container'>
        <p className='name'>
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className='work'>
        {props.charge} in <strong>{props.business}</strong>
        </p>
        <p className='text'>"{props.experience}"
        </p>

      </div>

    </div>
  );
}

export default Testimonio;
