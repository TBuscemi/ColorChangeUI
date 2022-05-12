import React,{useState,useEffect,useRef} from 'react'
import NavBar from '../Navigation/NavBar'
import Footer from '../Footer/Footer'
import Content from '../Content/Content'
import LightAndDark from '../ColorLogic/LightAndDark'


export default function Home() {


  return (
    <div>
        <NavBar/>
        <LightAndDark/>
        <Content/>
        <Footer/>
    </div>
  )
}
