class Request{

    get(url){
        return fetch(url)
        .then((res) => res.json())
    }

    delete(url){
        return fetch(url, {
            method: "DELETE",
            headers: {'Content-Type': 'applicationCache/json'}
        })
    }
}

export default Request;