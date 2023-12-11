import React, { useCallback } from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"

function BmiCalculator() {
    const [weight,setWeight] = useState()
    const [height,setHeight] = useState()
    const [bmi,setBmi] = useState()
    const {register, formState: {errors}, handleSubmit} = useForm()
  

    function calculate(data){
        console.log(data)
        let bmiformula = data.weight/(data.height*data.height)
        setBmi("Your BMI is : "+bmiformula.toFixed(1))
       
    }
    return (
        <div className="parent_container">
        <div className="container">
        <div className="app">
            <h1 className="title">BMI Calculator</h1>
            <form onSubmit={handleSubmit(calculate)}>

                <div>
                    <label htmlFor="weight">Weight:</label><br></br>
                    <input id="weight" step="any" className="label" type="number" placeholder="Weight in kg" value={weight} onChange={(e) => setWeight(e.target.value)} {...register("weight",{required: true, min: 0, max: 300})}/>
                    <br/>
                    <error>
                        {errors.weight?.type === "required" && "Weight is required"}
                        {errors.weight?.type === "min" && "weight cannot be less than 0kgs"}
                        {errors.weight?.type === "max" && "weight cannot be greater than 300kgs"}
                    </error>
                </div>
                <div>
                    <label htmlFor="height">Height:</label><br></br>
                    <input id="height" step="any" className="label" type="number" placeholder="Height in meters" value={height} onChange={(e) => setHeight(e.target.value)} {...register("height",{required: true ,min: 0.1, max: 3.0})}/>
                    <br/>
                    <error>
                        {errors.height?.type === "required" && "Height is required"}
                        {errors.height?.type === "min" && "height cannot be less than 0.1m"}
                        {errors.height?.type === "max" && "height cannot be greater than 3.0m"}
                    </error>
                </div>

                <div>
                    <button className="button2" type="submit">Calculate</button>
                    
                </div>

                <div>
                    <h3>{bmi}</h3>
                </div>
            </form>
        </div>
        </div>
        </div>
    )
}

export default BmiCalculator
