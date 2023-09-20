import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="nav-container">
            <nav>
                <h1>the planets</h1>
                <ul>
                    <li><Link to='/earth'>earth</Link></li>
                    <li><Link to='/jupiter'>jupiter</Link></li>
                    <li><Link to='/mars'>mars</Link></li>
                    <li><Link to='/mercury'>mercury</Link></li>
                    <li><Link to='/neptune'>neptune</Link></li>
                    <li><Link to='/saturn'>saturn</Link></li>
                    <li><Link to='/uranus'>uranus</Link></li>
                    <li><Link to='/venus'>venus</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;