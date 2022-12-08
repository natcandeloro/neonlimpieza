import '../assets/css/header.css';
import Logo from '../assets/statics/logo.png'


function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="Logo Neon Limpieza" className='logo'></img>
            <ul>
                <li>Quienes somos</li>
                <li>Servicios</li>
                <li>Presupuestos</li>
            </ul>
        </div>
    );
}

export default Header;