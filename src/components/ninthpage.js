import React, { useState } from 'react'
import './ninthpage.css'
import Button from './Button'

export default function Ninthpage(props) {

    const [visibilityControl,setControl] = useState(false);
    const sendButton = () => {
            setControl(true);
    }

  return (
    <div ref={props.referans} className='ninthpagediv'>
        <div className='baslikninediv'>
             <h5 className='basliknine'>CONTACT US</h5>
        </div>
        <h6 className='ninebaslik'>READY TO START YOUR NEXT PROJECT? <br/>CONTACT US TODAY</h6>
        <div className='nineimagediv1'>
            <div className='nineimageindiv'>
                <h1 className='ninebas1'>PALM DESERT SHOWROOM</h1>
                 <img src="image/formationslab-location-v2.jpeg" className='ninthimage'></img>
                 <p className='ninep1'>74-824 42nd Avenue <br/>
                      Palm Desert, CA 92260 </p>
                      <p className='ninep2'>(760) 773-1001</p>
            </div>
            <div className='nineimageindiv'>
                <h1 className='ninebas1'>NAPA SHOWROOM</h1>
                 <img src="image/formation-stone-napa.jpeg" className='ninthimage'></img>
                 <p className='ninep1'>807 Soscol Avenue <br/>
                      Napa, CA 94559 </p>
                      <p className='ninep2'>(707) 406-4004</p>
            </div>
        </div>
        <div className='nineimagediv1'>
            <div className='nineimageindiv'>
                <h1 className='ninebas1'>LOS ALAMITOS SHOWROOM</h1>
                 <img src="image/Formation_Home_Los_Alamitos.jpeg" className='ninthimage'></img>
                 <p className='ninep1'>10801 Bloomfield Street<br/>
                      Los Alamitos, CA 90720 </p>
                      <p className='ninep2'>(562) 294-5000</p>
            </div>
            <div className='nineimageindiv'>
                <h1 className='ninebas1'>BEND SHOWROOM</h1>
                 <img src="image/Formation-Stone-2-1024x683.jpeg" className='ninthimage'></img>
                 <p className='ninep1'>50 SE Scott St #8 <br/>
                      Bend, OR 97702 </p>
                      <p className='ninep2'>(541) 706-9990</p>
            </div>
        </div>

        <h6 className='nineheader'>Contact Us Online Now</h6>
        <p className='nineheader2'>Your Name (required)</p>
        <h1 className='ninecizgi'>_____________________________________________________________________</h1>
        <p className='nineheader2'>Your Email (required)</p>
        <h1 className='ninecizgi'>_____________________________________________________________________</h1>
        <p className='nineheader2'>Subject</p>
        <h1 className='ninecizgi'>_____________________________________________________________________</h1>
        <p className='nineheader2'>Your Message</p>
        <h1 className='ninecizgi2'>_____________________________________________________________________</h1>

        <div className='ninebuttondiv'>
            <div className='sendbuttondiv' onClick={sendButton}><Button ad="SEND" thirdp="ninthpage" /></div>
        </div>
        
        <div className={`errormessage${visibilityControl===true ? " visible" : ""}`} >One or more fields have an error. Please check and try again.</div>

    </div>
  )
}
