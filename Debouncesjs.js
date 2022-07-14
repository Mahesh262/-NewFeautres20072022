
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDebounce } from "./PrivateR/useDebounce";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [word, setWord] = useState("");
  const debonuce = useDebounce(word, 1000);
  useEffect(() => {
    if (debonuce) {
      fetcher(debonuce);
    } else {
      console.log("something else");
    }
    fetcher();
  }, [debonuce]);

  const fetcher = (value) => {
    axios
      .get(`https://fakestoreapi.com/products/?products=${value}`)
      .then((res) => setMovies(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />

      {/* {movies.length !== 0 ? (
        movies
          .filter((item) => item.title.includes(word))
          .map((items, index) => <div key={index}>{items.title}</div>)
      ) : (
        <h1>No data</h1>
      )} */}

      {movies.length !== 0 ? (
        movies
          .filter((item) => item.title.includes(word))
          .map((items, index) => <div key={index}>{items.title}</div>)
      ) : (
        <div>No data</div>
      )}
    </>
  );
};

export default App;
