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
          <footer className="App-footer">Coded by Tumaini Edgar</footer>
        </main>
      </div>
    </div>
  );
}

export default App;