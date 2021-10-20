import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(" ");

  function search(event) {
    event.preventDefault();
    alert(`Searching the meaning of the word ${word}`);
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
    </div>
  );
}
