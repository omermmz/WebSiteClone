import React from 'react'
import './seventhpage.css'
import Link from './Link'


export default function Seventhpage(props) {
  return (
    <div ref={props.referans} className='seventhpagediv'>
        <div className='seventhfirst'>
            <h5 className='basliks' >WHO WE SERVE</h5>
        </div>
        <h6 className='sixthpbaslik'>WE MEET THE UNIQUE NEEDS OF UNIQUE <br/>CUSTOMERS</h6>
        <div className='seventhimagediv'>
            <div className='seventhimageindiv'>
                <div className='imgradiv'>
                    <img src="image/serve-photo-designers.png" className='seventhimage'></img>
                </div>
                <h1>Designer&Architects</h1>
                <p>Looking to impress your client with <br/>
                a jaw-dropping material? Our <br/>
                selection of exotic natural stone <br/>
                and tile never disappoints.</p>

            </div>
            <div className='seventhimageindiv2'>
                <div className='imgradiv'>
                    <img src="image/serve-photo-homeowners.png" className='seventhimage'></img>
                </div>
                <h1 className='seventh1'>Homeowners</h1>
                <p className='seventhp1'>Having trouble finding a stunning <br/>
                natural stone or surface that’s still <br/>
                in your price range? Let our <br/>
                experts show you how.</p>

            </div>

            <div className='seventhimageindiv3'>
                <div className='imgradiv'>
                    <img src="image/serve-photo-contractors.png" className='seventhimage'></img>
                </div>
                <h1 className='seventh2'>Home Builder & Contractors</h1>
                <p className='seventhp2'>Staying on budget and on time is <br/>
                easy with access to the best <br/>
                selection of natural stone and tile <br/>
                in the region.</p>

           
            
            </div>
        </div>

        <div onClick={props.onClick} className='seventhbas'>
            <Link yazi="Whatever your project demands, we can help. Contact us today." color="color2"></Link>
        </div>
        
    </div>
  )
}
