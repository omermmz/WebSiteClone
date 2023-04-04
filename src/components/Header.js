import React, { Component, useEffect, useState } from 'react'
import './Header.css'
import Button from './Button.js';
import ButtonImage from './ButtonImage.js';
import SecondPage from './secondPage';
import { useRef } from 'react';



export default function Header(props) {

  
 const [show,setShow] = useState(true);
const [scrollPosition, setScrollPosition] = useState(0);
 const handleScroll = () => {
    const position = window.scrollY;
    console.log("scroll: ",position);
    console.log("scroll:2 ",scrollPosition);
    setScrollPosition(position);

    if(position>scrollPosition){
      setShow(false,{behavior: 'smooth'});
      
      
    }
    else if(position<scrollPosition){
      setShow(true,{behavior: 'smooth'});
    
      
    }
};



 /*const controlNavbar =() => {
  
 } */

 useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return() => {
    window.removeEventListener('scroll', handleScroll);
  }
 })

 /*useEffect(() => {
    window.addEventListener('scroll',controlNavbar);
    
    return() => {
      window.removeEventListener('scroll',controlNavbar);
      
    }
 },[]) */

 
 
 
  return (
    <div ref={props.referans} className={`${show && 'header'}`}>
        <div className='logo'>
                <ButtonImage resim="image/formation-logo.svg" className="image"></ButtonImage>
                
    </div>
        <div className='butondiv'>
            <div onClick={props.onClick}  ><Button ad="WHO WE ARE" hover="hover" paddinng="padding"></Button></div>
            <div onClick={props.onClick2} ><Button ad="WHAT WE OFFER" hover="hover" paddinng="padding"></Button></div>
            <div onClick={props.onClick3} ><Button ad="WHO WE SERVE" hover="hover" paddinng="padding"></Button></div>
            <div onClick={props.onClick4} ><Button ad="CONTACT" hover="hover" paddinng="padding"></Button></div>
            <a href='tel://+8886309749' className='navpparag1link' ><div className='callnumberdiv'><div className='callicon'></div><Button ad="(888) 630-9749" hover="hover" paddinng="padding" color="colorcallnumber"></Button></div></a>
        </div>
        
    </div>
  )
}
