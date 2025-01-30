function Ingatlan(props){
    const ingatlan = props.ingatlan;
    return(
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
    )
}
export default Ingatlan;