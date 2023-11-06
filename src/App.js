import logo from "./images/logo.svg";
import ping from "./images/ping.svg";
import "./App.css";
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div><Link to="/Shuffle">
        <button className="App-btn"> Click!</button></Link>
      </div>
      <div className="App-map">
        <img src={ping} className="App-ping" alt="ping" />
        <p className="App-address">
          한양대학로55
        </p>
      </div>
    </div>   
  );
}

