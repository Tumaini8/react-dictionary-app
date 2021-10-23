import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [word, setWord] = useState(" ");
  let [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }

  function handleSearch(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="Dictionary-form" onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word"
          autoFocus="on"
          onChange={handleSearch}
        />
      </form>

      <Results results={results} />
    </div>
  );
}
