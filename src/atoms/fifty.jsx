import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../imgs';

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
                    <img src={Img[17].img} alt="imgagen" className="simg" />
                    <img src={Img[28].img} alt="imgagen" className="simg" />
                    <img src={Img[29].img} alt="imgagen" className="simg" />
                    <img src={Img[30].img} alt="imgagen" className="simg" />
                    <img src={Img[31].img} alt="imgagen" className="simg" />
                    <img src={Img[32].img} alt="imgagen" className="simg" />
                    <img src={Img[34].img} alt="imgagen" className="simg" />
                    <img src={Img[35].img} alt="imgagen" className="simg" />
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