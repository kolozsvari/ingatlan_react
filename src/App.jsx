import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ingatlan from './components/ingatlan'

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
            <Ingatlan ingatlan={ingatlan} key={ingatlan.id} />
        ))}
        </div>
      </div>
    </>
  );
}

export default App
