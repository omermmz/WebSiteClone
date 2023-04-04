import React from 'react'
import './Link.css';

export default function Link(props) {
  return (
    <h4 className={`link ${props.size} ${props.color}`}>{props.yazi}</h4>
  )
}
