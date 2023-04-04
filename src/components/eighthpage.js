import React from 'react'
import './eighthpage.css'
import Link from './Link';


const slideritems = [<div>
  <p className='eparag'>“I have used Formation when remodeling several of my own homes and they <br/>
    always help me find just what I am looking for. The people are friendly and have a <br/>
    lot of knowledge of all the different products they offer.”</p>
  <h6 className='ebaslik2'>ELIZABETH BENTON – HOMEOWNER, THE VINTAGE COUNTRY CLUB</h6>
</div>,<div>
          <p className='eparag'>“Formation makes sure the material for my project shows up on time and they<br/>
            stay within my budget. My clients love how clean and organized their slab yard is. <br/>
            They have a great selection of everything you need to complete your project.”</p>
          <h6 className='ebaslik2'>JERRY SANTUCCI, SANTUCCI BUILDERS</h6>
        </div>,<div>
          <p className='eparag'>“As an interior designer in the Coachella Valley, I love having everything I need <br/>
            for my projects all in one place. Formation has by far the best selection of unique <br/>
            and exotic slabs that you just can’t find anywhere else.”</p>
          <h6 className='ebaslik2'>KIM BRADLEY, KIM BRADLEY DESIGN GROUP</h6>
        </div>]
const delay2 = 4000;

export default function Eighthpage() {
  const [index,setIndex] = React.useState(0);
  const timoutRef= React.useRef(null);

  function resetTimeout(){
      if(timoutRef.current){
          clearTimeout(timoutRef.current);
      }
  }

  React.useEffect(() => {
      resetTimeout();
     timoutRef.current = setTimeout(() => setIndex((prevIndex) => prevIndex === slideritems.length - 1 ? 0 : prevIndex + 1),
        delay2
      );
  
      return () => {
          resetTimeout();
      };
    }, [index]);

  return (
    
    <div className='eighthpagediv'>
        <h6 className='ebaslik'>HEAR WHAT OUR LOYAL CLIENTS HAVE <br/>TO SAY</h6>
        <div className='eightslideshow'>
          <div className='eightslideshowSlider' style={{transform: `translate3d(${-index *100}%, 0,0)`}}>
            {slideritems.map((itemslider,index) => (
              <div className='eightslide' key={index} >{itemslider}</div>
            ))}  
          </div>
        </div>
        <div className='noktadiv'>
            <p className={`noktalar${index === 0 ? " active0" : ""}`}  onClick={() => {setIndex(0)}} >.</p>
            <p className={`noktalar${index === 1 ? " active1" : ""}`} onClick={() => {setIndex(1)}}>.</p>
            <p className={`noktalar${index===2 ? " active2" : ""}`}  onClick={() => {setIndex(2)}}>.</p>
        </div>
        
    </div>
  )
}
