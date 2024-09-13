import { useState } from "react";
import Form from "./components/Form.jsx";
import "./App.css";

function App() {

  const [error, setError] = useState({});
  
  return (
    <>
    <Form />
    </>
  )
}

export default App
