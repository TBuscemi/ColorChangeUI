import React,{useState,useEffect,useRef} from 'react'
import './style/Footer.scss'
import LightAndDark from '../ColorLogic/LightAndDark'

export default function Footer() {

    const mountedRef=useRef()

    const[colors, setcolors]=useState()

    const[newColor, setnewColor]=useState()

    useEffect(()=>{
        mountedRef.current=true
        if(mountedRef.current===true) setnewColor(colors)
        return ()=> mountedRef.current===false
    },[colors])


    return (
        <div className="footer"  style={{backgroundColor: newColor}}>
            <input type="color" onChange={e=>setcolors(e.target.value)}/> 
            <div className='footer-container'>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/thomas-buscemi/" target='_blank'><i class="fa-brands fa-linkedin fab"></i></a>
                    <a href="https://github.com/TBuscemi/" target='_blank'><i class="fa-brands fa-github fab"></i></a>
                </div>
            </div>
        </div>
    )
}
