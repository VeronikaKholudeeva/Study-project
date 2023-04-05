import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareMinus,
  faWindowClose,
  faWindowMaximize,
} from "@fortawesome/free-regular-svg-icons";
import Header from "./components/header/Header";
import DateToday from "./components/header/DateToday.tsx";
import Weather from "./components/weather-app/Weather";
import Calculator from "./components/calculator/Calculator.tsx";
function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <DateToday />
        <Calculator />
        <Weather />
      </div>
    </div>
  );
}

export default App;
