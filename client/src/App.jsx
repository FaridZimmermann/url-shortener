import { useState } from "react";
import Form from "./components/Form.jsx";
import Error from "./components/Error.jsx";
import Header from "./components/Header.jsx";
import "./App.css";

function App() {

  const [error, setError] = useState("");

  function handleError(requestError) {
    setError(requestError.message);
  }
  return (
    <>
    <Header />
    {error && <Error error={error} />}
    <Form onError={handleError} />
    </>
  )
}

export default App
