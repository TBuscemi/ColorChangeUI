import React,{useState} from 'react'
import './style/Footer.scss'



export default function Footer() {


    return (
        <div className="footer">
            <div className='footer-container'>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/thomas-buscemi/" target='_blank'><i class="fa-brands fa-linkedin fab"></i></a>
                    <a href="https://github.com/TBuscemi/" target='_blank'><i class="fa-brands fa-github fab"></i></a>
                </div>
            </div>
        </div>
    )
}
