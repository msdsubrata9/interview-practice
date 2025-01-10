import React, { useEffect, useState } from "react";

function useFetch(url, options = {}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData(isCanceled) {
    setLoading(true);
    setError(null);
    try {
      const data = await fetch(url, options);
      const json = await data.json();
      if (!isCanceled) {
        setData(json);
      }
    } catch (err) {
      if (!isCanceled) setError(err);
    } finally {
      if (!isCanceled) {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    let isCanceled = false;
    fetchData(isCanceled);
    return () => {
      isCanceled = true;
    };
  }, []);

  return { data, loading, error };
}

export default useFetch;
