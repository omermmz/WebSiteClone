import React from 'react'
import './fifthpage.css'
import Link from './Link'


export default function Fifthpage(props) {
  return (
    <section className='fifthpagediv'>
        <div className='bas'>
            <h5 className='basliks'>WHAT WE OFFER</h5>
            <h6 className='basliks2'>DISCOVERING DESIGN IN EVERY CORNER <br/>OF THE GLOBE</h6>
            <pre className='fifth'>Formation offers over 1,000 different natural stone and tile products from locations around the world.</pre>
            <img src="image/map-dots.svg" className='fifthimage'></img>
            <img src="image/map-base.svg" className='fifthimage2'></img>
        </div>
        <div onClick={props.onClick} className='bas2'>
            <Link yazi="Bring a world of design to your next project. Contact us today."></Link>
        </div>
        
    </section>
  )
}
