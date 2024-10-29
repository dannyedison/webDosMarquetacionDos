import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <nav>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/servicios">Servicios</Link></li>
                    <li><Link to="/contactos">Contactos</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/acercade">Acerca de</Link></li>
                </ul>

                {/* <a href="">Home</a> 
                <a href="">Servicios</a>
                <a href="">Contactos</a>
                <a href="">Productos</a>
                <a href="" >A cerca de</a>     */}
                {/* <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/servicios">Servicios</Link></li>
                    <li><Link to="/contactos">Contactos</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/acerca-de">Acerca de</Link></li>
                </ul> */}
            </nav>
        </header>
    )
};

export default Header;