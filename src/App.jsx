import { useState } from "react"
import React from "react";
import Result from "./assets/Result"
const secretNum =Math.floor(Math.random()*10)+1;
function App() {

const [term,setTerm]=useState('')

  const handleChange=(e)=>{
    setTerm(e.target.value)
  }
  return (
    <>
      <div className="container">
        <div className="head">
          <label  htmlFor="term">Guess the Number between 1 to 10(SecretNum {secretNum})</label>
        </div>
        <input
        id="term"
        type="text"
        name="term"
        onChange={handleChange}
        />
        <Result secretNum={secretNum} term={term}/>
      </div>
    </>
  )
}

export default App
