// eslint-disable-next-line no-unused-vars
import React from 'react'
//import pic from '../Images/security_hacker_names.webp';
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
    <h2>{props.name}</h2>
    <img src={props.img} alt='hhhhh' ></img>
    
    </div>

  )
}

export default Card