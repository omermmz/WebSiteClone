import React from 'react'
import './openPage.css';
import Button from './Button';

export default function OpenPage(props) {
  return (
    <section className='div'>
    <img src="image/img2.jpeg" className='image2'></img>
    <h1 className='yaziOpen123'>BİZİM SİTEMİZE HOŞGELDİNİZ SAYIN KULLANICI</h1>
    <div onClick={props.onClick}> <Button ad="SCROLL DOWN" hover="hover2" scroll="buttonScroll" ></Button></div>
    </section>
  )
}
