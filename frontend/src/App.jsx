// src/App.jsx
import { HashRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import Item from "./Item";

function TestApi() {
  const [message, setMessage] = useState("...Loading...");

  useEffect(() => {
    fetch('http://localhost:3000/api/hello')
      .then(result => result.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("Fetch Error: ", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Next JS 2 Connection Test</h1>
      <p>Message: {message}</p>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="item" element={<Item />} />
          <Route path="test_api" element={<TestApi />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}