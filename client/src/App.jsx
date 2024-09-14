import { useState } from "react";
import Form from "./components/Form.jsx";
import Error from "./components/Error.jsx";
import "./App.css";

function App() {

  const [error, setError] = useState({});

  function handleError(requestError) {
    setError(requestError);
  }
  return (
    <>
    {error && <Error error={error} />}
    <Form onError={handleError} />
    </>
  )
}

export default App
