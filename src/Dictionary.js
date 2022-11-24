import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse (response) {
    console.log(response);

  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey=
    "563492ad6f91700001000001aca243189127426e8764de86bf1ff36a";

    let pexelsApiUrl = 
    `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;

    axios.get(pexelsApiUrl).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load () {
    setLoaded(true);
    search();
  }

  if (loaded) {
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
        <div className="hint">
          suggested words: sunset, wine, yoga, forest, plant...
        </div>
      </section>
      <Results results={results} />
    </div>
  );
  } else {
    load();
    return "Loading";
  }
}