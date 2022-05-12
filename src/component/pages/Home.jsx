import React,{useState,useEffect,useRef} from 'react'
import NavBar from '../Navigation/NavBar'
import Footer from '../Footer/Footer'
import Content from '../Content/Content'
import LightAndDark from '../ColorLogic/LightAndDark'
import './Home.scss'


export default function Home() {
  
  const mountedRef=useRef()

  const[color, setColor]=useState()

  const[newNavFootColor, setNewNavFootColor]=useState()

  const[newBodyColor, setNewBodyColor]=useState()
  
  const[newTextColor, setNewTextColor]=useState()

  
  useEffect(()=>{
      mountedRef.current=true
      if(mountedRef.current===true) setNewBodyColor(color)
      return ()=> mountedRef.current=false
  },[color])
  

  useEffect(()=>{
      mountedRef.current=true
      if(mountedRef.current===true) setNewNavFootColor(color)
      return ()=> mountedRef.current=false
  },[color])
  
  useEffect(()=>{
      mountedRef.current=true
      if(mountedRef.current===true) setNewTextColor(color)
      return ()=> mountedRef.current=false
  },[color])


  
  return (
    <div>
        <div className='nav-bar' style={{backgroundColor: newNavFootColor}}>
          <NavBar/>    
        </div> 
        <div style={{backgroundColor: newBodyColor}} >
        	<input type="color" onChange={e=>setNewNavFootColor(e.target.value)}/> 
        	<input type="color" onChange={e=>setNewBodyColor(e.target.value)}/>
        	<input type="color" onChange={e=>setNewTextColor(e.target.value)}/>
        </div>
        <div style={{backgroundColor: newBodyColor, color:newTextColor}}>
        	<Content/>
        </div> 
        <div style={{backgroundColor: newNavFootColor, a:newTextColor}}>
          	<Footer/>
        </div>
    </div>
  )
}
