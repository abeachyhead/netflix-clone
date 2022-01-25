import React, { useState, useEffect } from "react";
import axios from "./axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // make a request to API when row loads
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div>
      {/* Title*/}
      <h2>{title}</h2>

      {/* Container -> thumbnails */}
    </div>
  );
}

export default Row;
