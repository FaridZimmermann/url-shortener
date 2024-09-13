import { useState} from "react";

export default function Form(props) {

    const [inputVal, setInputVal] = useState("");
    
    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(inputVal)
        setInputVal("");
      }
    
    return (
        <form onSubmit={handleFormSubmit}>
            <input name="url" type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
            <input type="submit" value="POST URL" />
        </form>
    )
}