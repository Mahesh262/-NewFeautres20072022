import React, { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [deboucevalue, setDebouncevalue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncevalue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return deboucevalue;
};
