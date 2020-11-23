import React from 'react';
import { Link } from 'react-router-dom';
import Sevent from '../assets/17.JPG';
import Th from '../assets/32.jpg';
import Tho from '../assets/33.jpg';
import Tht from '../assets/34.jpg';
import Thth from '../assets/35.jpg';
import Thf from '../assets/36.jpg';
import Thfv from '../assets/37.jpg';

function fifty() {
    return (
        <>
            <div className="box">
                <h1>Más increíble aún</h1>
                <h2>Ya existen diferentes formas de persuación,
                que invitana que esta situacíon cambie; no obstante,
                es exigua la consciencia que hay, para pugnar la ignoracia
                de este crimen.</h2>
                <h3>Pero aún estamos a tiempor de que esto cambie</h3>
                <div className="imgs">
                    <img src={Sevent} alt="imgagen" className="simg" />
                    <img src={Th} alt="imgagen" className="simg" />
                    <img src={Tho} alt="imgagen" className="simg" />
                    <img src={Tht} alt="imgagen" className="simg" />
                    <img src={Thth} alt="imgagen" className="simg" />
                    <img src={Thf} alt="imgagen" className="simg" />
                    <img src={Thfv} alt="imgagen" className="simg" />
                </div>
                <div className="buttons">
                    <Link to="/">
                        <button>Inicio</button>
                    </Link>
                    <Link to="/sexto">
                        <button>Ultimo</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default fifty;