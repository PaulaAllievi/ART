import React from 'react'
import './styles.css'
import {SlSocialInstagram, SlSocialTwitter, SlSocialFacebook} from 'react-icons/sl'

const Footer = () => {
  return (
    <>
    <footer>
        <div>     
            <p>www.art.com.ar</p>
        </div> 
        <div className='iconos'>
               <i><SlSocialInstagram/></i>
               <i><SlSocialTwitter/></i>
               <i><SlSocialFacebook/></i>            
        </div>        
    </footer>
    </>
  )
}

export default Footer