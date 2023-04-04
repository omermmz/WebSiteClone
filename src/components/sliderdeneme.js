import React from 'react'
import './sliderdeneme.css'

const colors = ["#0088FE", "#00C49F", "#FFBB28"];


export default function Sliderdeneme() {
   
  return (
    <div>hello</div>
  )
}


/*
 <div className='slideshow'>
        <div className='slideshowSlider' style={{transform: `translate3d(${-index *100}%, 0,0)`}} >
            {colors.map((backgroundColor,index) => (
                <div className='slide' key={index} style={{ backgroundColor}} />
            ))}
        </div>

        <div className='slideshowDots'>
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
        </div>
    </div>
*/