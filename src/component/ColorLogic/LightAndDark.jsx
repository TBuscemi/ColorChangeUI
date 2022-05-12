import React,{useEffect,useState,useRef} from 'react'

export const LightAndDark = () => {

    const mountedRef=useRef()

    const[colors, setcolors]=useState()

    const[newColor, setnewColor]=useState()

    useEffect(()=>{
        mountedRef.current=true
        if(mountedRef.current===true) setnewColor(colors)
        return ()=> mountedRef.current===false
    },[colors])


  return (
    <div>
        <input type="color" onChange={e=>setnewColor(e.target.value)}/> 
        <button style={{backgroundColor: newColor}} >
        	<h1>butt1</h1>
        </button>

    </div>
  )
}

export default LightAndDark
