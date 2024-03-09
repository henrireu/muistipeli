import { Link } from "react-router-dom";
import './App.css';
import Lippupeli from "./lippupeli";


function App() {
  return (
    <div className="paaDiv">
      <h1>Pelisivusto</h1>
      <Link to="muistipelit">Muistipelit</Link>
    </div>
  )
}

export default App;
