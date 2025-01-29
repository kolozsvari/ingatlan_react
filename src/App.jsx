import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-center">Hirdetések</h1>
      <div className="container">
        <div className="row" id="ingatlanok">

          <div className="col-md-3">
            <div className="card mb-3" style={{ width: "18rem" }}>
              <img src="https://img.jofogas.hu/hdimages/Belvarosi_haz_Elado__704952574126578.jpg" className="card-img-top"
                alt="..." />
              <div className="card-body">
                <h5 className="card-title">Ház</h5>
                <p className="card-text">Belvárosi környezetben, árnyékos helyen kis méretú családi ház eladó. Tömegközlekedéssel könnyen megközelíthető.</p>
                <span>2022-02-28</span>
                <span className="float-right">28990000</span>

                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default App
