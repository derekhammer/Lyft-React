import React from 'react';
import HomeImage from '../assets/image/HomeImage.png';




function Home(){

    return(
        <div>
            <style jsx>{`
           .homeback {
                background-color: #9be5f3!important;
                width: 100%;
                height: 1200px;
            }
            img {
                width: 496px;
                float: right;
                margin-right: 14%;
                margin-top: 21%;
            }
            .textBox{
                margin-top: 20%;
                float: left;
                margin-left: 20%;
                font-size: 50px;

            }
            h2 {
               margin-bottom: -70px;
               color: #1850a5;
            }
            .inputClass {
                margin-top: 20%;
                height: 50px;
                width: 300px;
                border-radius: 15px;
            }
            input::placeholder {
                font-size: 15px;
                text-align: center;
            }
            p {
                font-size: 17px;
                float: right;
                margin-top 21%;
                color: #1850a5;
                
            }
            .checkClass {
                margin-left: 30px;
                margin-top: 10px;
                -webkit-appearance:none;
                width:30px;
                height: 30px;
                background:white;
                border-radius:15px;
                border:2px solid #1850a5;
                
            }
            button {
                background-color: #1850a5;
                color: white;
                float: right;
                padding-bottom: 5px;
                border-radius: 15px;
                -moz-border-radius: 10px;
                -webkit-border-radius: 25px;
                margin-right: 370px;
                margin-top: 40px;
                width: 250px;
                height: 56px;
                align-items: flex-start;
                text-align: center;
                font-size: 18px;
                font-family: Helvetica;
                font-weight: bold;
                
            }
            
            `}</style>
            
            <img src={HomeImage}/>
        <div className='homeback'>
        <div className='textBox'>
        <h2>Grab the wheel </h2>
        <h2>and start earning.</h2>
        <input  className="inputClass" type="text" placeholder="Enter mobile phone number"/>
        <input className="checkClass" type="checkbox" checked="checked" /><p>I agree to Lyft's Terms of Service</p>
        </div>
        <div className="bottomRow">
        <button type="button">Apply to drive</button>
        </div>
        </div>
        </div>
    );
}

export default Home;