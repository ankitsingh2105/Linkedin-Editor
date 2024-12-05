import { useState } from 'react'
import './App.css'
import image from "./icon-16.png"
import linkedin from "../public/linkedin.png";
import gmail from "../public/gmail.png";
import github from "../public/github.png";

function App() {
  const style = {
    background: "#0a66c2",
    color: "white",
    padding: "10px 0px",
    textAlign: "center",
    width: "16rem",
    marginTop: "-20px",
    borderRadius: "10px",
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

  const socialLinkStyle = {
    margin: "10px 5px",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
    textDecoration: "none",
    display: "inline-block"
  }

  return (
    <center>
      <h1 style={style}>Linkedin Editor</h1>
      <div style={instructionsStyle}>
        <h3>~Instructions for Text Formatting~</h3>
        <p><strong>Ctrl + B</strong>: Make text <strong>Bold</strong></p>
        <p><strong>Ctrl + I</strong>: Make text <em>Italic</em></p>
        <p><strong>Ctrl + Y</strong>: Make list with bullet points</p>
        <b>Use the above keyboard shortcuts to format your text while typing for a post on Linkedin.</b>
      </div>

      {/* Green Button */}
      <a href="https://www.ankitsinghchauhan.in" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
        <b>Developed by Ankit Singh Chauhan</b>
      </a>
      <br />
      <br />
      <section>
        <a style={{ padding: "0px 30px" }} href="https://www.linkedin.com/in/ankitsingh2105/" target="_blank" rel="noopener noreferrer">
          <img style={{ width: "20px" }} src={linkedin} alt="LinkedIn" />
        </a>
        <a style={{ padding: "0px 30px" }} href="https://github.com/ankitsingh2105" target="_blank" rel="noopener noreferrer">
          <img style={{ width: "20px" }} src={github} alt="GitHub" />
        </a>
        <a style={{ padding: "0px 30px" }} href="mailto:ankitchauhan21500@gmail.com">
          <img style={{ width: "20px" }} src={gmail} alt="Gmail" />
        </a>
      </section>


    </center>
  )
}

export default App
