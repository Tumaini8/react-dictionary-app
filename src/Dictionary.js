import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [word, setWord] = useState("sunset");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSearch(event) {
    event.preventDefault();
    setWord(event.target.value);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function Load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form className="Dictionary-form" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a word"
              autoFocus="on"
              onChange={handleSearch}
            />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    Load();
    return "Loading....";
  }
}
