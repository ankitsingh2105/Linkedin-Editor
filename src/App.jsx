import { useState } from "react";
import "./App.css";
import linkedin from "../public/linkedin.png";
import gmail from "../public/gmail.png";
import github from "../public/github.png";

function App() {
  const headerStyle = {
    background: "#0a66c2",
    color: "white",
    padding: "15px",
    textAlign: "center",
    borderRadius: "10px",
    marginBottom: "20px",
    fontSize: "24px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width : "17rem",
    fontWeight: "bolder"
  };

  const instructionsStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontSize: "12px",
    maxWidth: "600px",
    margin: "20px auto",
    textAlign: "center",
    lineHeight: "1.6",
    padding :"10px",
    marginBottom : "-5px"
  };

  const socialLinkStyle = {
    display: "inline-block",
    margin: "10px 10px",
    padding: "10px 15px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
  };

  const iconStyle = {
    width: "24px",
    margin: "0 10px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  };

  const sectionStyle = {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  };

  return (
    <center>
      <div style={headerStyle}>Linkedin Editor</div>
      <div style={instructionsStyle}>
        <h3 style={{ marginBottom: "15px", color: "#333" }}>
          ~ Instructions for Text Formatting ~
        </h3>
        <p>
          <strong>Ctrl + B</strong>: Make text <strong>Bold</strong>
        </p>
        <p>
          <strong>Ctrl + I</strong>: Make text <em>Italic</em>
        </p>
        <p>
          <strong>Ctrl + Y</strong>: Make a bulleted list
        </p>
        <p>
          <strong>Ctrl + M</strong>: Make a numbered list
        </p>
        {/* <p>
          <strong>Alt + U</strong>: Make text underline <u>Underline</u>
        </p> */}
        <br />
        <b style={{ marginTop: "15px", color:"#00c200" }}>
          Selected the text and use these shortcuts in a Linkedin Post
        </b>
        {/* <p>
          <i>Lists work when the selected text has multiple lines.</i>
        </p> */}
      </div>
{/* 
      <a
        href="https://www.ankitsinghchauhan.in"
        target="_blank"
        rel="noopener noreferrer"
        style={socialLinkStyle}
      >
        <b>

        Developed by &nbsp;
        <b style={{color:"#383838"}} >Ankit Singh Chauhan</b>
        </b>
      </a>

      <section style={sectionStyle}>
        <a
          href="https://www.linkedin.com/in/ankitchauhan21/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={iconStyle}
            src={linkedin}
            alt="LinkedIn"
            onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
        </a>
        <a
          href="https://github.com/ankitsingh2105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={iconStyle}
            src={github}
            alt="GitHub"
            onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
        </a>
        <a href="mailto:ankitchauhan21500@gmail.com">
          <img
            style={iconStyle}
            src={gmail}
            alt="Gmail"
            onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
        </a>
      </section> */}
    </center>
  );
}

export default App;
