import './App.css';
import maat from './maat.js';
import { useState, useEffect } from 'react';

function App() {
  const [maanKirjaus, setMaanKirjaus] = useState([]);

  function kirjaaMaa(maanNimi) {
    const uusilista = [...maanKirjaus];
    uusilista.push(maanNimi);
    setMaanKirjaus(uusilista);
  }


  return (
    <div className="App">
      <h1>Muistipeli</h1>
      {maat.map((maa, indeksi) => (
        <div key={indeksi}  onClick={() => kirjaaMaa(maa.nimi)}>
          <img src={maa.url}></img>
          <p>{maa.nimi}</p>
        </div>
      ))}
    </div>
  )
}

export default App;
