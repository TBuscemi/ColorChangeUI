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

  const[changeClassName, setChangeClassName]=useState()


  
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
        <div className={changeClassName} style={{backgroundColor: newNavFootColor}}>
          <NavBar/>    
        </div> 
        <div style={{backgroundColor: newBodyColor}}>
        <div>
          <input type="radio" name="fav_language" value="light"
            onClick={e=>setChangeClassName('lightmode')}
          />
          <label for="html">light</label><br></br>
          <input type="radio" name="fav_language" value="dark"/>
          <label for="html">dark</label><br></br>
          <input type="radio" name="fav_language" value="custom"
            onClick={e=>setChangeClassName('none')}
          />
          <label for="html">custom</label><br></br>
        </div>
        	<input type="color" onChange={e=>setNewNavFootColor(e.target.value)}/> 
        	<input type="color" onChange={e=>setNewBodyColor(e.target.value)}/>
        	<input type="color" onChange={e=>setNewTextColor(e.target.value)}/>
        </div>
        <div style={{backgroundColor: newBodyColor, color:newTextColor}}>
        	<Content/>
        </div> 
        <div style={{backgroundColor: newNavFootColor}} className={changeClassName} >
          	<Footer/>
        </div>
    </div>
  )
}
