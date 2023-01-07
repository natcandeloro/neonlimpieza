import "../assets/css/somos.css";
import "bootstrap";
import foto1 from "../assets/statics/vertical.jpg";

function Somos() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 uno">
                    <img src={foto1} alt="Mujer Limpiando" className="foto1"/>
                </div>
                <div className="col-6 dos">
                    <h3>Somos NEON</h3>
                    <p className="dosp">Una empresa dedicada a la limpieza de tapizados. Con un sistema a domicilio diseñado para brindarte tranquilidad y confort. De la mano de nuestro personal capacitado, realizamos eficientemente el servicio de tu elección. </p>
                </div>
            </div>
            <div className="servicios">
                <h1>SERVICIOS</h1>
                <h1>Colchones, <br/>sillas, sillones, <br/> alfombras y autos</h1>
            </div>
        </div>
    );
}

export default Somos;