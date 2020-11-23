import React from 'react';
import One from '../assets/1.jpg';
import Two from '../assets/2.jpg';
import Five from '../assets/5.jpg';
import Nine from '../assets/9.jpg';
import Elv from '../assets/11.jpg';
import Twl from '../assets/12.jpg';
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
                    <img alt="imagen" src={One} className="simg" />
                    <img alt="imagen" src={Two} className="simg" />
                    <img alt="imagen" src={Five} className="simg" />
                    <img alt="imagen" src={Nine} className="simg" />
                    <img alt="imagen" src={Elv} className="simg" />
                    <img alt="imagen" src={Twl} className="simg" />
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