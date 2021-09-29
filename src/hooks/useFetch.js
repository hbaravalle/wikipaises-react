import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(url);
      let data = await res.json();
      setPaises(data);
      setIsLoaded(true);
    };
    fetchData();
  }, []);

  return { paises, isLoaded };
}
