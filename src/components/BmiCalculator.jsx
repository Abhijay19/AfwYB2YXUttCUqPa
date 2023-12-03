import React, { useCallback } from "react"
import { useState } from "react"

function BmiCalculator() {
    const [weight,setWeight] = useState()
    const [height,setHeight] = useState()
    const [bmi,setBmi] = useState()

    function reload(){
        window.location.reload()
    }
    function calculate(e){
        e.preventDefault()

        if((weight<0 || weight>300)||(height<0.1 || height>3.0)){
            alert("Enter a valid Height/Weight")
        }else{
            let bmiformula = weight/(height*height)
            setBmi(bmiformula.toFixed(1))
        }

    }
    return (
        <div className="parent_container">
        <div className="container">
        <div className="app">
            <h1 className="title">BMI Calculator</h1>
            <form onSubmit={calculate}>

                <div>
                    <label >Weight: </label><br></br>
                    <input step="any" className="label" type="number" placeholder="Weight in kg" value={weight} onChange={(e) => setWeight(e.target.value)}/>
                </div>
                <div>
                    <label >Height: </label><br></br>
                    <input step="any" className="label" type="number" placeholder="Height in meters" value={height} onChange={(e) => setHeight(e.target.value)}/>
                </div>

                <div>
                    <button className="button2" type="submit">Calculate</button>
                    <button className="button2" type="submit" onClick={reload}>Reload</button>
                </div>

                <div>
                    <h3>Your BMI is : {bmi}</h3>
                </div>
            </form>
        </div>
        </div>
        </div>
    )
}

export default BmiCalculator
