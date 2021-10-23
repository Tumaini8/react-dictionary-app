import Logo from "./Logo.jpg";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={Logo} className="App-logo img-fluid" alt="logo" />
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
