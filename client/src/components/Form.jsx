import { useState} from "react";
import useFetch from "../hooks/useFetch.js";

export default function Form(props) {
//Form Component
    const [inputVal, setInputVal] = useState("");
    const {post} = useFetch("http://localhost:3000");

    async function handleFormSubmit(e) {
        props.onError({});
        props.onSuccess({});
        e.preventDefault();
        try {   
            const data = await post("/api/shorturl", {
                url: inputVal
            });
            setInputVal("");
            props.onSuccess(data);
            console.log("also ran")
        } catch(err) {
            console.log("error ran")
            props.onError(err);
        } 
        
      }
    
    return (
        <form onSubmit={handleFormSubmit}>
            <input name="url" type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
            <input type="submit" value="POST URL" />
        </form>
    )
}