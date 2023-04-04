import React from 'react'
import './secondPage.css'

import Link from './Link'


export default function SecondPage(props) {
  return (
    <div ref={props.referans} className='second'>
        <h1 className='baslik'>WHO WE ARE</h1>
        <h6 className='baslik2'>OUR PASSION FOR EXOTIC STONE AND SURFACES RUNS DEEP</h6>
        <pre className='paragraf'>The design of your next stone or tile project is already well underway. It’s a process that<br/> 
             began millions of years ago, miles beneath the surface of the earth. We take over where <br/> 
             nature leaves off, importing the finest natural stone and porcelain tile from around the <br/> 
             globe and continuing its millennia-long process of formation. Like the origins of the <br/> 
             products we offer, our passion for architecture and design runs deep.</pre>
        <div onClick={props.onClick} ><Link yazi="Unearth your next design today. Contact us." size="boyut" /></div>
    </div>
  
  
  )
}
