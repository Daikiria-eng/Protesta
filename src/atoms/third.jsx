import React from 'react';
import Img from '../imgs';
import {Link} from 'react-router-dom';

function td(){
    return(
        <>
            <div className="box">
                <h1>Son bastantes</h1>
                <h3>Los lugares en donde esto se presenta.</h3>
                <h4>Cuando alguien va por la calle con alguna basura,
                piensa "Una basura más, no hará la diferencia" y más de mil personas
                lo pensaron también</h4> 
                <div className="tbox">
                    <img alt="imagen" src={Img[1].img} className="simg" />
                    <img alt="imagen" src={Img[2].img} className="simg" />
                    <img alt="imagen" src={Img[5].img} className="simg" />
                    <img alt="imagen" src={Img[9].img} className="simg" />
                    <img alt="imagen" src={Img[11].img} className="simg" />
                    <img alt="imagen" src={Img[12].img} className="simg" />
                </div>                
                <div className="buttons">
                    <Link to="/segundo">
                        <button>Anterior</button>
                    </Link>
                    <Link to="/cuarto">
                        <button>Siguiente</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default td;