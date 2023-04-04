import React from 'react'
import './Button.css'

export default function Button(props) {
  return (
    <div className={`container  ${props.border} ${props.hover} ${props.padding} ${props.width} ${props.height} ${props.scroll} ${props.thirdp} ${props.color}`} data-hover={props.yazi}>{props.ad}</div>
  )
}
