import { useState } from 'react'
import './App.css'
import image from "./icon-16.png"
function App() {
  const style = {
    background: "#0a66c2",
    color: "white",
    padding: "10px 0px",
    textAlign: "center",
    width : "15rem",
    marginTop : "-20px"
  }

  const instructionsStyle = {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#f1f1f1",
    borderRadius: "8px",
    fontSize: "12px",
    maxWidth: "600px",
    margin: "20px auto",
    textAlign: "center"
  }

  return (
    <center>
      <h1 style={style}>Linkedin Editor</h1>
      <div style={instructionsStyle}>
        <h3>Instructions for Text Formatting:</h3>
        <p><strong>Ctrl + B</strong>: Make text <strong>Bold</strong></p>
        <p><strong>Ctrl + I</strong>: Make text <em>Italic</em></p>
        {/* <p><strong>Ctrl + U</strong>: Underline text</p> */}
        <b>Use the above keyboard shortcuts to format your text while typing for a post.</b>
      </div>
      <a href='https://ankitsinghchauhan.in' style={{ padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor : "pointer", fontSize : "10px" }}>
        <b>
          Developed by Ankit Singh Chauhan
        </b>
      </a>
    </center>
  )
}

export default App
