import "./Success.css";


export default function Success({returnObj}) {
    const urlStr = `${window.location}api/shorturl/${returnObj.shortenedUrl}`

    return (
        <div className="success">
            <p>Success! You can access your URL @ <a href={urlStr}>{urlStr}</a></p>
        </div>
    )
}