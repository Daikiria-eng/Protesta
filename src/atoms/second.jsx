import React from 'react';
import Imgs from '../imgs';
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
                    <img src={Imgs[3].img} alt="imagen" className="simg" />
                    <img src={Imgs[7].img} alt="imagen" className="simg" />
                    <img src={Imgs[8].img} alt="imagen" className="simg" />
                    <img src={Imgs[10].img} alt="imagen" className="simg" />
                    <img src={Imgs[6].img} alt="imagen" className="simg" />
                    <img src={Imgs[17].img} alt="imagen" className="simg" />
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