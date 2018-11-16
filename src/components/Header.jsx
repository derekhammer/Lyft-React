import React from 'react';
import { Link } from 'react-router-dom';
import lyftLogo from '../assets/image/lyft-logo.png';



function Header(){
    return(
        <div>
        <style jsx>{`
        div {
            background-color: #9be5f3!important;
            border-bottom: 1px solid #1850a5; 
        }
       img{
           width: 65px;
           padding: 20px;
           margin-left: 200px;
           
       }
        .headerLinks{
            float: right;
            margin-right: 20%;
            padding: 10px;   
            font-size: 20px;
            border-bottom: none; 
            font-family: Helvetica;
            font-weight: bold;
            
                
        }
        p {
            float: left;
            padding: 10px;
           
            
        }
        `}</style>
        <img src={lyftLogo}/>
        <div className='headerLinks'>
        <p><Link  style={{ textDecoration: 'none' }} to="/driver">Driver</Link></p>
        <p><Link  style={{ textDecoration: 'none' }} to="/rider">Rider</Link></p>
        <p><Link  style={{ textDecoration: 'none' }} to="/login">Log In</Link></p>
        </div>
        </div>
        
    );
}

export default Header;