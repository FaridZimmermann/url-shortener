import { useState } from "react";
import Form from "./components/Form.jsx";
import Error from "./components/Error.jsx";
import Success from "./components/Success.jsx";
import Header from "./components/Header.jsx";
import "./App.css";

function App() {

  const [error, setError] = useState("");
  const [success, setSuccess] = useState({});

  function handleError(requestError) {
    setError(requestError.message);
  }

  function handleSuccess(returnObj) {
    setSuccess(returnObj);
  }

  return (
    <>
    <Header />
    {error && <Error error={error} />}
    {Object.keys(success).length > 0 && <Success returnObj={success} />}
    <Form onError={handleError} onSuccess={handleSuccess}/>
    </>
  )
}

export default App
