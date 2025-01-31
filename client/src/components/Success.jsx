import "./Success.css";


export default function Success({returnObj}) {

    return (
        <div className="success">
            <p>Success! You can access your URL @ {`${window.location}/api/shorturl/${returnObj.shortenedUrl}`}</p>
        </div>
    )
}