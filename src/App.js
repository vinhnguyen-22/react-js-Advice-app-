import React, { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";

const App = () => {
  const [advice, setAdvice] = useState("");
  const fetchAdvice = async () => {
    await axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        const { advice } = res.data.slip;
        setAdvice(advice);
        return advice;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="next" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
