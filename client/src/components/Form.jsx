import { useState} from "react";
import useFetch from "../hooks/useFetch.js";

export default function Form(props) {
//Form Component
    const [inputVal, setInputVal] = useState("");
    const {post} = useFetch("http://localhost:3000");

    async function handleFormSubmit(e) {
        e.preventDefault();
        console.log(inputVal)
        try {   
            const data = await post("/api/shorturl", {
                url: inputVal
            });
            setInputVal("");
            console.log(data)
        } catch(err) {
            console.log(err);
        } 
        
      }
    
    return (
        <form onSubmit={handleFormSubmit}>
            <input name="url" type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
            <input type="submit" value="POST URL" />
        </form>
    )
}