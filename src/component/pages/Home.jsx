import React,{useState,useEffect,useRef} from 'react'
import NavBar from '../Navigation/NavBar'
import Footer from '../Footer/Footer'
import Content from '../Content/Content'
import LightAndDark from '../ColorLogic/LightAndDark'
import './Home.scss'


export default function Home() {
  
  const mountedRef=useRef()

  const[navFootColor, setNavFootColor]=useState()

  const[newNavFootColor, setNewNavFootColor]=useState()

  const[bodyColor, setBodyColor]=useState()

  const[newBodyColor, setNewBodyColor]=useState()

  
  useEffect(()=>{
      mountedRef.current=true
      if(mountedRef.current===true) setNewBodyColor(bodyColor)
      return ()=> mountedRef.current=false
  },[bodyColor])
  

  useEffect(()=>{
      mountedRef.current=true
      if(mountedRef.current===true) setNewNavFootColor(navFootColor)
      return ()=> mountedRef.current=false
  },[navFootColor])


  
  return (
    <div>
        <div className='nav-bar' style={{backgroundColor: newNavFootColor}}>
          <NavBar/>    
        </div> 
        <div style={{backgroundColor: newBodyColor}} >
        	<input type="color" onChange={e=>setNewNavFootColor(e.target.value)}/> 
        	<input type="color" onChange={e=>setNewBodyColor(e.target.value)}/>
        </div>
        <div style={{backgroundColor: newBodyColor, color:newNavFootColor}}>
        	<Content/>
        </div> 
        <div style={{backgroundColor: newNavFootColor}}>
          	<Footer/>
        </div>
    </div>
  )
}
