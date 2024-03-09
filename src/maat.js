import {useState, useEffect} from 'react';

const maat = [
    { nimi: "Argentiina", url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" },
    { nimi: "Brasilia", url: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg" },
    { nimi: "Chile", url: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg" },
    { nimi: "Tsekki", url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg" },
    { nimi: "Tanska", url: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg" },
    { nimi: "Suomi", url: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg" },
    { nimi: "Ranska", url: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
    { nimi: "Saksa", url: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" },
    { nimi: "Kreikka", url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg" },
    { nimi: "Italia", url: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" },
    { nimi: "Japani", url: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" },
    { nimi: "Meksiko", url: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" },
];

/*const koirakuvat = [

];

function FetchKoirakuvat() {
    const [kuvat, setKuvat] = useState([]);
    const [laskuri, setLaskuri] = useState(0);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
          .then(response => response.json())
          .then(data => {
            const objekti = {
                kuva: data.message,
                indeksi: laskuri 
            };
            let kuvalista = [...kuvat];
            kuvalista.push(objekti);
            setKuvat(kuvalista);
          })
          .catch(error => console.error('Error:', error));
        
        if (laskuri < 11) {
            let luku = laskuri;
            luku++;
            setLaskuri(luku);
        }
    },[laskuri]);

}
*/
const FetchKoirakuvat = async () => {
    const kuvat = [];
    let laskuri = 0;
  
    while (laskuri < 11) {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        //console.log(data);
        const message = data.message;
        const objekti = {
          url: message,
          nimi: laskuri,
        };
        console.log(objekti);
  
        kuvat.push(objekti);
        laskuri++;
      } catch (error) {
        console.error('Error:', error);
        break; // Keskeytä loop, jos tapahtuu virhe
      }
    }
  
    return kuvat;
  };
  
  export  { maat };
  //export default FetchKoirakuvat;