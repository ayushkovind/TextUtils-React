import React, { useState } from 'react'



export default function TextForm(props) {

const [text, setText] = useState('Enter text here');
const handleUpClick = () => {
    let upperText = text.toUpperCase()
    setText(upperText)
    props.showAlert("Text converted to uppercase", "success")
}

const handleLoClick = () => {
    let lowerText = text.toLowerCase()
    setText(lowerText)
    props.showAlert("Text converted to lowercase", "success")
}

const handleOnChange = (event) => {
    setText(event.target.value)
}

const handleWigClick = () => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        result += text[i].toUpperCase();
      } else {
        result += text[i].toLowerCase();
      }
    }
    setText(result)
    props.showAlert("Text converted to wiggly", "success")
} 
  return (
    <>
    <div className='container' > 
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white'}} rows="8"></textarea>
    </div> 
    <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UPPERCASE</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to LOWERCASE</button>
    <button className="btn btn-primary mx-1" onClick={handleWigClick}>Convert to Wiggly</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} Words in text and {text.length} characters in text</p>
        <p>{Math.floor(((text.split(" ").length)*2.4)/60)} minutes and {Math.floor(((text.split(" ").length)*2.4)%60)} seconds to read the text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview it"}</p>
    </div>
    </>
  )
}





