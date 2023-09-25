// import logo from "./logo.svg";
import "./App.css";
import { useState, useTransition } from "react";

function App() {
  const [title, setTitle] = useState(["추천추천", "강추", "강강추추"]);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      {title.map((titleEl, i) => {
        return (
          <div key={i} className="list">
            <h4>{titleEl}</h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
