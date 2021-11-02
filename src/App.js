import ShecodesLogo from "./ShecodesLogo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={ShecodesLogo} className="App-logo img-fluid mt-3" alt="logo" />{" "}
          <h1>
            <em>Welcome to my Dictionary Application</em>🌍
          </h1>
        </header>
        <main>
          <Dictionary />
          <footer className="App-footer">
            <em>
              {" "}
              <p className="mt-4 text-success">
                Coded by Tumaini Edgar,{" "}
                <a href="https://github.com/Tumaini8/react-dictionary-project">
                  open-source code from Github
                </a>
              </p>
            </em>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
