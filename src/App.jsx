import "./App.css";
import linkedin from "../public/linkedin.png";
import gmail from "../public/gmail.png";
import github from "../public/github.png";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, initializeFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAY01Vm9VRs215X-vB_qTOtJl1M998WaY8",
  authDomain: "js-assignment-e518c.firebaseapp.com",
  databaseURL: "https://js-assignment-e518c-default-rtdb.firebaseio.com",
  projectId: "js-assignment-e518c",
  storageBucket: "js-assignment-e518c.firebasestorage.app",
  messagingSenderId: "825762142750",
  appId: "1:825762142750:web:1928d11230746d25346c0f",
  measurementId: "G-02ZQWLFBVS"
};

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});

function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("reviewNotificationShown")) {
      setShowNotification(true);
      localStorage.setItem("reviewNotificationShown", "true");
    }
  }, []);

  const handleSubmit = async () => {
    try {
      if(rating == 0){
        alert("Pleae give rating before submitting, thanks");
        return;
      }
      await addDoc(collection(db, "reviews"), { name, rating, feedback });
      alert("Review submitted, Thanks!!");
      setRating(0);
      setHover(0);
      setName("");
      setFeedback("");
    } catch (error) {
      console.error("Error adding review: ", error);
    }
  };

  return (
    <center>
      {showNotification && (
        <div style={{ background: "#ffcc00", padding: "10px", borderRadius: "5px", marginBottom: "10px", fontWeight: "bold" }}>
          New feature: You can now submit reviews and feedback!
        </div>
      )}

      <div style={{ background: "#0a66c2", color: "white", padding: "15px", textAlign: "center", borderRadius: "10px", marginBottom: "20px", fontSize: "24px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", width: "17rem", fontWeight: "bolder" }}>Linkedin Editor</div>
      <div style={{ backgroundColor: "#ffffff", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", fontSize: "12px", maxWidth: "600px", margin: "20px auto", textAlign: "center", lineHeight: "1.6", padding: "10px" }}>
        <h3 style={{ marginBottom: "15px", color: "#333" }}>~ Instructions for Text Formatting ~</h3>
        <p><strong>Ctrl + B</strong>: Make text <strong>Bold</strong></p>
        <p><strong>Ctrl + I</strong>: Make text <em>Italic</em></p>
        <p><strong>Ctrl + Q</strong>: Make a bulleted list</p>
        <p><strong>Ctrl + M</strong>: Make a numbered list</p>
        <br />
        <b style={{ marginTop: "15px", color: "#00c200" }}>Select text and use these shortcuts in a Linkedin Post</b>
      </div>
      <div>
        <h3>Rate this Extension</h3>
        <a href="https://chromewebstore.google.com/detail/linkedin-editor/dpbccjhabjmnohefgjoongadmjpanfmd/reviews" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#0a66c2", fontWeight: "bold" }}>Please rate on the official page - Click here</a>
        <br /><br />
        <b>AND / OR</b>
        <br /><br />
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              key={index}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: index <= (hover || rating) ? "#ffc107" : "#e4e5e9" }}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              ★
            </button>
          );
        })}
        <br /><br />
        <input required type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: "5px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} /><br />
        <input placeholder="What can we improve" value={feedback} onChange={(e) => setFeedback(e.target.value)} style={{ padding: "5px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "200px" }} /><br />
        <button onClick={handleSubmit} style={{ padding: "10px 15px", background: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Submit Review</button>
      </div>
      <br />
    </center>
  );
}

export default App;
