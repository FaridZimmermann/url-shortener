export default function useFetch(baseUrl) {

    async function post(url, body) {
            const response = await fetch(`${baseUrl}${url}`
                , {
                    method: "POST",
                    headers : {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                });
            const data = await response.json();
            return data;
    }

    return {post};
}
