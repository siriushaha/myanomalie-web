import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [results, setResults] = useState(new Map());
  const [loading, setLoading ] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const resultMap = new Map();
        data.result.forEach(item => resultMap.set(item.id, item));
        setResults(resultMap);
        setLoading(false);
      }
      catch (error) {
        console.log('');
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return [ results, loading];
};

export default useFetch;