import React from 'react';
import Three from '../assets/3.jpg';
import Seven from '../assets/7.jpg';
import Eight from '../assets/8.jpg';
import Ten from '../assets/10.jpg';
import Six from '../assets/6.jpg';
import Sevt from '../assets/17.JPG';
import { Link } from 'react-router-dom';

function sc() {
    return (
        <>
            <div className="sbox">
                <h1>En su mayoría</h1>
                <p>son muchas las personas que cometen este pecado
                de contaminar nuestro lugar</p>
                <h2>Sin embargo</h2>
                <p>Hay personas que se dan cuenta de esto, y expresan
                su opinión al respecto</p>
                <div className="imgs">
                    <img src={Three} alt="imagen" className="simg" />
                    <img src={Seven} alt="imagen" className="simg" />
                    <img src={Eight} alt="imagen" className="simg" />
                    <img src={Ten} alt="imagen" className="simg" />
                    <img src={Six} alt="imagen" className="simg" />
                    <img src={Sevt} alt="imagen" className="simg" />
                </div>
                <div className="buttons">
                    <Link to="/">
                        <button>Anterior</button>
                    </Link>
                    <Link to="/tercero">
                        <button>Siguiente</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default sc;