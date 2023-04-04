import React from 'react'
import './sixthpage.css'

const items = [<div className='sliderdiv2'> <img src="image/behind_the_stone-vetrazzo.jpeg" className='sixthimage'></img>
<h6 className='sixthbaslik2'>Vetrazzo®</h6>
<pre className='sixthpara'>Vetrazzo® is a unique product comprising concrete and <br/>
     recycled glass. From architectural and art glass to beer  <br/>
     bottles and jars, each mix is a work of art, with a story <br/>
     told in every surface.</pre></div>, <div className='sliderdiv2'> <img src="image/behind_the_stone-mosaic.jpeg" className='sixthimage'></img>
<h6 className='sixthbaslik2'>Specialty & Mosaic</h6>
<pre className='sixthpara'>In adiition to our line of traditional stone and tile, we <br/>
     offer a wide range of specialty and mosaic products, <br/>
     whose exotic one-of-a-kind beauty you won’t find <br/>
     anywhere else.</pre></div>,<div className='sliderdiv2'> <img src="image/behind_the_stone-granite.jpeg" className='sixthimage'></img>
<h6 className='sixthbaslik2'>Granite</h6>
<pre className='sixthpara'>An igneous rock of volcanic origin, granite is one of the <br/>
     hardest natural stones. During its formation, mineral <br/>
     gases and liquids create crystalline formations, giving it <br/>
     a stunning array of colors.</pre></div>,<div className='sliderdiv2'> <img src="image/behind_the_stone-marble.jpeg" className='sixthimage'></img>
<h6 className='sixthbaslik2'>Marble</h6>
<pre className='sixthpara'>Marble is a metamorphic rock found in mountains <br/>
     around the world. It comprises recrystallized minerals  <br/>
     and swirls of hidden impurities. These beautiful natural <br/>
     variances give marble its signature warmth and <br/>
     sophistication.</pre></div>,<div className='sliderdiv2'> <img src="image/behind_the_stone-travertine.jpeg" className='sixthimage'></img>
<h6 className='sixthbaslik2'>Travertine</h6>
<pre className='sixthpara'>Travertine is a porous calcareous rock that forms when <br/>
     natural mineral water percolates through limestone and  <br/>
     recrystallizes. Its earthy texture and warm hues give it a <br/>
     distressed but modern look.</pre></div>,<div className='sliderdiv2'> <img src="image/behind_the_stone-limestone.jpeg" className='sixthimage'></img>
<h6 className='sixthbaslik2'>Limestone</h6>
<pre className='sixthpara'>Formed from the bonding of mineral fragments and <br/>
     organic materials in the earth’s bedrock, Limestone  <br/>
     mainly comprises calcium carbonate, which gives it its <br/>
     signature array of natural colors and streaking.</pre></div>,<div className='sliderdiv2'> <img src="image/behind_the_stone-quartzite.jpeg" className='sixthimage'></img>
<h6 className='sixthbaslik2'>Quartzite</h6>
<pre className='sixthpara'>Quartzite is a metamorphic rock formed from sandstone. <br/>
     The extreme heat and pressurization in its formation    <br/>
     leads to the recrystallization of minerals, making <br/>
     extremely strong and flecked with natural patterning. </pre></div>,<div className='sliderdiv2'> <img src="image/behind_the_stone-quartz.jpeg" className='sixthimage'></img>
<h6 className='sixthbaslik2'>Quartz</h6>
<pre className='sixthpara'>Manufactured from one of the hardest crystalline <br/>
     minerals, quartz is renowned for its durability  <br/>
     and color. Formation is proud to be the only <br/>
     stocking distributor of Caeserstone® quartz in <br/>
     the Coachella Valley.</pre></div>,<div className='sliderdiv2'> <img src="image/behind_the_stone-porcelain.jpeg" className='sixthimage'></img>
<h6 className='sixthbaslik2'>Porcelain</h6>
<pre className='sixthpara'>Fired at higher temperatures than ceramic tile <br/>
     porcelain tile comprises up to fifty percent feldspar,  <br/>
     making it denser and less porous than other tile. It is <br/>
     stronger than granite and resists staining. </pre></div>]

const delay = 2500;

export default function Sixthpage() {
  const [index,setIndex] = React.useState(0);
  const timoutRef= React.useRef(null);

  function resetTimeout(){
      if(timoutRef.current){
          clearTimeout(timoutRef.current);
      }
  }

  React.useEffect(() => {
      resetTimeout();
     timoutRef.current = setTimeout(() => setIndex((prevIndex) => prevIndex === items.length - 1 ? 0 : prevIndex + 1),
        delay
      );
  
      return () => {
          resetTimeout();
      };
    }, [index]);
  return (
    <div className='sixthpagediv'>
        <h6 className='sixthpbaslik'>THE STORY BEHIND THE STONE</h6>
        <div className='sixthmid'>
            <h6 className='ok' onClick={() => index=== 0 ? setIndex(items.length-1) : setIndex(index-1)}>&lt;</h6>
            <div className='slideslideritem'>
              <div className='slideshowSlider2' style={{transform: `translate3d(${-index *100}%, 0,0)`}}>
              
                {items.map((item,index) => (
                
                    <div className='sliderdiv' key={index}>{item}</div>
                
                ))}
              </div>
            </div>
            
              <h6 className='ok2' onClick={() => index=== items.length-1 ? setIndex(0) : setIndex(index+1)}>&gt;</h6>
     
            
        </div>
    </div>
  )
}


































/*
export default function sixthpage() {
  return (
    <div className='sixthpagediv'>
        <h6 className='sixthpbaslik'>THE STORY BEHIND THE STONE</h6>
        <div className='sixthmid'>
            <h6 className='ok'>&lt;</h6>
            <div className='sliderdiv'>
            <img src="image/img2.jpeg" className='sixthimage'></img>
            <h6 className='sixthbaslik2'>Quartz</h6>
            <pre className='sixthpara'>Manufactured from one of the hardest crystalline <br/>
                 minerals, quartz is renowned for its durability  <br/>
                 and color. Formation is proud to be the only <br/>
                 stocking distributor of Caeserstone® quartz in <br/>
                 the Coachella Valley.</pre>
            </div>
            <h6 className='ok2'>&gt;</h6>
        </div>
    </div>
  )
}

*/