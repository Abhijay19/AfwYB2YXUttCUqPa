import React from "react";
import { Link } from "react-router-dom";

function click(){
    window.location.href='https://drive.google.com/uc?export=download&id=1M9E0sLq4eFf42rTJY9SPpay84UyAZzJ9';
}

function Main(){
    return(
        <div className="main">
            <h1>Candidate Details</h1>
            <h3>Abhijay Sekhar Choudhury</h3>
            <h3>B.Tech July 2024</h3>
            <h3>Skills worked with : </h3>
            <ul>
                <li>GitHub Actions | Automation</li>
                <li>HTML | CSS | JavaScript</li>
                <li>ExpressJS | NodeJS</li>
                <li>Python | JAVA</li>
                <li>Rest-APIs</li>
                <li>Django</li>
                <li>ReactJS</li>
                <li>PostgreSQL | MongoDB</li>
                <li>Axios | Bootstrap</li>
            </ul>
   

            <button className='button' onClick={click} type="button">Download Resume</button><br></br>
            <Link to={'/bmi_calculator'}><button className='button' type="button">BMI Calculator</button></Link>
        </div>
    )
}

export default Main;