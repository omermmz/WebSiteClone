import React from 'react'
import './ButtonImage.css';
export default function ButtonImage(props) {
  return (
    <div className='ButonResim'><img src={props.resim} className='image'></img></div>
  )
}
