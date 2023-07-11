import { useEffect, useState } from "react";

const useFetch = (endpoint, initial = []) => {
  const [data, setData] = useState(initial);

  useEffect(() => {
    let getData = fetch(endpoint);
    getData
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [endpoint]);

  return [data];
};

export default useFetch;
