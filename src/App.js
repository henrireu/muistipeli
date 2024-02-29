import './App.css';
import maat from './maat.js';
import { useState, useEffect } from 'react';

// arvotaan numero 1-12

function App() {
  const [maaLista, setMaaLista] = useState([]);
  const [maanKirjaus, setMaanKirjaus] = useState([]);

  useEffect(() => {
    const uusilista = [];
    maat.map((maa, indeksi) => {
      const objekti = {
        nimi: maa.nimi,
        url: maa.url
      }
      uusilista.push(objekti);
    })
    setMaaLista(uusilista);
  },[]);

  function sekoitaJarjestys() {
    const sekoitettuLista = [...maaLista].sort(() => Math.random() - 0.5);
    setMaaLista(sekoitettuLista);
  }

  function kirjaaMaa(maanNimi) {
    const uusilista = [...maanKirjaus];
    uusilista.push(maanNimi);

    //katsotaan onko duplikaatteja eli päättyykö peli
    const set = new Set(uusilista);
    console.log("set: " + set.size);
    console.log("uusilista: " + uusilista.length);
    if (set.size !== uusilista.length) {
      alert("peli loppui");
      setMaanKirjaus([]);
    } else {
      setMaanKirjaus(uusilista);
    }
    sekoitaJarjestys();
  }


  return (
    <div className="App">
      <h1>Muistipeli</h1>
      <h3>Paras tulos:</h3>
      <h3>Pisteet:</h3>
      <div className="maataulukko">
        {maaLista.map((maa, indeksi) => (
          <div className="maaesine" key={indeksi}  onClick={() => kirjaaMaa(maa.nimi)}>
            <img src={maa.url}></img>
            <p>{maa.nimi}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
