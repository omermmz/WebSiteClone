import React from 'react'
import './thirdPage.css'
import Button from './Button'

export default function ThirdPage(props) {
  return (
    <div ref={props.referans} className='thirdPage'>
         <div>
         <h1 className='baslik'>WHAT WE OFFER</h1>
         <h6 className='baslik3'>OUR PRODUCTS</h6>
         <pre className='preg'>Contemporary, rustic, elegant, or whimsical—whatever your artistic vision may be, we have <br/>
            the medium to bring it to life. We carry only the finest natural stone and tile lines, each with <br/>
            a character all its own.</pre>
        </div>
        <div className='column2'>
            <a href='http://www.formationstone.com/products/#granite' className='thirdlink'><Button ad="GRANITE" thirdp="thirdpage"/></a>
            <a href='http://www.formationstone.com/products/#marble' className='thirdlink'><Button ad="MARBLE" thirdp="thirdpage3"/></a>
            <a href='http://www.formationstone.com/products/#natural-stone' className='thirdlink'><Button ad="QUARTZITE & NATURAL STONE" thirdp="thirdpage4"/></a>
            <a href='http://www.formationstone.com/products/#caesarstone' className='thirdlink'><Button ad="CEASERSTONE" thirdp="thirdpage5"/></a>
        </div>

        <div className='column3'>
            <a href='http://www.formationstone.com/products/#limestone' className='thirdlink'><Button ad="LIMESTONE, TRAVERTINE & ONYX" thirdp="thirdpage6"/></a>
            <a href='http://www.formationstone.com/products/#sapienstone' className='thirdlink'><Button ad="SAPIENSTONE" thirdp="thirdpage7"/></a>
            <a href='http://www.formationstone.com/products/#vetrazzo' className='thirdlink'><Button ad="VETRAZZO" thirdp="thirdpage8"/></a>
            <a href='http://www.formationstone.com/products/#tiles-and-mosaics' className='thirdlink'><Button ad="TILES & MOSAICS" thirdp="thirdpage9"/></a>
        </div>

        <div className='column4'>
            <a href='http://www.formationstone.com/products/' className='thirdlink'><Button ad="ALL PRODUCTS" thirdp="thirdpage2" /></a>
        </div>
    </div>
  )
}
