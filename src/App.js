import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 class="text-center"> 📔 Dictionary 🔎  </h1>
          <h3 class="text-center"> Search for any word </h3>
        </header>
        <main>
          <Dictionary defaultKeyword="universe" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by 
            <a href="https://www.linkedin.com/in/laura-carrillo21/" class="link" target="_blank" rel="noreferrer"> Lau Carrillo </a>
            and is <a href="https://github.com/LauCarrillo21/dictionary-project" class="link" target="_blank" rel="noreferrer"> open-sourced </a> on Github
          </small>
        </footer>
      </div>
    </div>
  );
}