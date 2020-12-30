import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
            <div className="container">
      <h1>Weather Dashboard</h1>
      <Weather defaulftCity="Paris"/>
      <Weather defaulftCity="Moscow"/>
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/IraCannet" target="_blank" rel="noopener noreferrer">
            Ira
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/IraCannet/cutemeteo-on-react"
            target="_blank" rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
        </div>
    </div>
  );
}
