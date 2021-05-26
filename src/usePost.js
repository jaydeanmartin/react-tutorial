import { useState, useEffect } from 'react';

const usePost = (url, data) => {
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { 
                method: 'POST',
                headers: {"content-type": "application/json"},
                body: JSON.stringify(data),
                signal: abortCont.signal })
                .then(res => {
                    if(!res.ok){
                        throw Error('could not POST the data for that resource');
                    }
                    return res.json()
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    if (err.name === 'AbortError') {
                        console.log('POST aborted')
                    } else {
                        setError(err.message);
                        setIsPending(false);
                    }
                })
        }, 1000);

        return () => abortCont.abort();
    }, [url]);

    return { isPending, error }
}

export default useFetch;