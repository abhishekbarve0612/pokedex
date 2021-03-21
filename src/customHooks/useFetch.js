import {useState, useEffect} from 'react';
const useFetch = (url) => {
  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, {signal: abortCont.signal })
    .then((res) => res.json())
    .then(data => {
      setIsLoading(false);
      setData(data);
      setError(null);
    }).catch(err => {
      if (err.name === 'AbortError'){

      } else {
        setError(err.message);
        setIsLoading(false);
      }
    })

    return () => {
      abortCont.abort();
    }
  }, [url])

  return {data, isLoading, error};
}

export default useFetch;