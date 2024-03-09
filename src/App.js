import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="paaDiv">
      <div>
        <h1>Pelisivusto</h1>
        <Link className="linkki" to="muistipelit">Muistipelit</Link>
      </div>
      <h2>Parannuksia ja lisää pelejä tulossa..</h2>
    </div>
  )
}

export default App;
