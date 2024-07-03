import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useFetch = (cb: any, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fn = async (...args: any) => {
    setLoading(true);
    setError(null);
    try {
      const response = await cb(options, ...args);
      setData(response);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, fn };
};

export default useFetch;
