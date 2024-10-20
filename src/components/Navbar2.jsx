import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "./Navbar2.css"


function NavegacionAdopcion() {
    return (
        <nav>
            <div className="logo"> 
                <a href="#home">
                {/*<img src="./ASSETS/img/LOGO/om_logo.png" alt="Logo Centro Holístico"></img>*/}
            </a>
            </div>
                <ul className="nav-links">
                <li><a href="#about">Inicio</a></li>
                <li><a href="#informacion">Información</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <li><a href="#prueba">Tarjetitas</a></li>
                
            </ul>
            
            <a href="" className="btn"><button>Contactanos</button></a>
        </nav>
    );
}

export default NavegacionAdopcion;