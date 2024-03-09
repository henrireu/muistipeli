import { Link } from "react-router-dom";
import { maat } from './maat.js';
import { useState, useEffect } from 'react';

//const maat = await FetchKoirakuvat();

function Lippupeli() {
  const [maaLista, setMaaLista] = useState([]);
  // tämä lista on tehty sitä varten että katsotaan tuleeko duplikaatteja
  const [maanKirjaus, setMaanKirjaus] = useState([]);

  const [pisteet, setPisteet] = useState(0);
  const [parastulos, setParastulos] = useState(0);

  /*useEffect(() => {
    const uusilista = [];
    maat.map((maa, indeksi) => {
      const objekti = {
        nimi: maa.nimi,
        url: maa.url
      }
      uusilista.push(objekti);
    })
    setMaaLista(uusilista);
  },[]);*/

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
    if (set.size !== uusilista.length) {
      alert("peli loppui");
      setMaanKirjaus([]);
      if (pisteet > parastulos) {
        setParastulos(pisteet);
      }
      setPisteet(0);
    } else {
      setMaanKirjaus(uusilista);
      let uudetpisteet = pisteet;
      uudetpisteet++;
      setPisteet(uudetpisteet);
      if(uudetpisteet > 11) {
        alert("onnittelut pääsit pelin läpi!");
        setParastulos(12);
        setPisteet(0);
      }
    }
    sekoitaJarjestys();
  }


  return (
    <div className="App">
      <h2>Lippupeli</h2>
      <h3>Paras tulos: {parastulos}</h3>
      <h3>Pisteet: {pisteet}</h3>
      <div className="maataulukko">
        {maaLista.map((maa, indeksi) => (
          <div className="maaesine" key={indeksi}  onClick={() => kirjaaMaa(maa.nimi)}>
            <img src={maa.url}></img>
            <p>{maa.nimi}</p>
          </div>
        ))}
      </div>
      <Link className="linkki" to="/">Etusivulle</Link>
    </div>
  )
}

export default Lippupeli;
