import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ingatlanok, setIngatlanok] = useState([])

  useEffect(() =>{
    fetch('http://127.0.0.1:8000/api/ingatlan')
    .then(response => response.json())
    .then(data => setIngatlanok(data))
  }, [])

  return (
    <>
      <h1 className="text-center">Hirdetések</h1>
      <div className="container">
        <div className="row" id="ingatlanok">
          {ingatlanok.map((ingatlan) =>(

          <div className="col-md-3">
            <div className="card mb-3" style={{ width: "18rem" }}>
              <img src={ingatlan.kepUrl} className="card-img-top"
                alt="..." />
              <div className="card-body">
                <h5 className="card-title">{ingatlan.kategoria.nev}</h5>
                <p className="card-text">{ingatlan.leiras}</p>
                <span>{ingatlan.hirdetesDatuma}</span>
                <span className="float-right">{ingatlan.ar}</span>

                <a href="#" className="btn btn-primary">
                  Go somewhere</a>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}

export default App
