import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav style={{ backgroundColor: '#26a69a'}}>
        <div className="nav-wrapper">
            <Link to={'/'} className="brand-logo">Cursos de TI</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to={'/shop'}>Comprar</Link></li>
                <li><Link to={'/about'}>Sobre</Link></li>
            </ul>
        </div>
    </nav>
)

export default Header;