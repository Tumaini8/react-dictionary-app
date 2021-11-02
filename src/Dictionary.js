import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos.js";

export default function Dictionary() {
  let [word, setWord] = useState("Flowers");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let[photos, setPhotos]= useState(null);

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
    let pexelsApiKey = "563492ad6f9170000100000100a3e4437429460aafe9dbb6113b9bad";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=1`;
    axios.get(pexelsApiUrl, {headers: {"Authorization" : `Bearer ${pexelsApiKey}`}}).then(handlePexelsResponse);
  }

  function handlePexelsResponse(response){
    console.log(response.data);
    setPhotos(response.data.photos)
  }

  function Load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h5>What word do you want to look up?</h5>
          <form className="Dictionary-form" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a word"
              defaultValue="FLowers"
              onChange={handleSearch}
            />
          </form>
        </section>
        <Results results={results} />
        <Photos photos ={photos}/>
      </div>
    );
  } else {
    Load();
    return "Loading....";
  }
}
