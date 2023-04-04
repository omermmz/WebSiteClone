import React from 'react'
import './fourthpage.css'
import Link from './Link'
import { useRef } from 'react';

export default function Fourthpage(props) {

  
  return (
    <div className='fourthpagediv'>
       <div ><img src="image/formationslab-location-bg.jpeg" className='firstpart'></img></div>
       <h4 className='secondpart'>THE GRIT OF A SLAB YARD, THE FINERIES OF A SHOWROOM</h4>
       <div className='thirdpart'>
            <div className='thirdpartfirst'>
                <div className='thpffirst'>
                    <img src="image/icon-setting.svg" className='imagee'></img>
                    <h1>Unique Setting</h1>
                    <pre>In addition to a sprawling slab yard stocked with the <br/>
                        finest natural stone, we offer a unique retail setting in <br/>
                        which to consult with our specialists about your <br/>
                        design and architecture needs.</pre>
                </div>
                <div className='thpfsecond'>
                    <img src="image/icon-inventory.svg" className='imagee2'></img>
                    <h1>Unrivaled Inventory</h1>
                    <pre>Drawing on over 40 years of relationships with <br/>
                        quarries around the world, we import exotic and <br/>
                        specialty natural stone from the hills of Brazil, Turkey, <br/>
                        Italy, France, and more.</pre>
                </div>
            </div>
            <div className='thirdpartsecond'>
                <div className='thpsfirst'>
                    <img src="image/icon-team.svg" className='imagee'></img>
                    <h1>An Expert Team</h1>
                    <pre>The Formation team prides itself on being experts in <br/>
                        our trade. Our highly skilled staff knows everything <br/>
                        about natural stone and surfaces, and is eager to <br/>
                        assist with your design.</pre>
                </div>
                <div className='thpssecond'>
                    <img src="image/icon-service.svg" className='imagee2'></img>
                    <h1>A History of Service</h1>
                    <pre>We’ve been serving California and Oregon for over <br/>
                    four decades. Our loyal clientele is like family—a <br/>
                    family we hope you’ll join! If we don’t have the product <br/>
                    you need, we will find it.</pre>
                </div>
            </div>
       </div>
       <div onClick={props.onClick} className='linkdivf'>
            <Link yazi="Visit us today to see for yourself!" size="boyut" color="color"></Link>
       </div>
       <div  className='imgdivf'>
            <img src="image/formationslab-location-v1.jpeg" className='imagee3'></img>
            <img src="image/formationslab-showroom-v2.jpeg" className='imagee3'></img>
            <img src="image/formationslab-location-v3.jpeg" className='imagee3'></img>
       </div>
    </div>
  )
}
