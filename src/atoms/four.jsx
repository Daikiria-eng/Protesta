import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../imgs';

function four() {
    return (
        <>
            <div className="box">
                <div className="imgs">
                    <img src={Img[14].img} alt="imgagen" className="simg" />
                    <img src={Img[16].img} alt="imgagen" className="simg" />
                    <img src={Img[18].img} alt="imgagen" className="simg" />
                    <img src={Img[22].img} alt="imgagen" className="simg" />
                    <img src={Img[23].img} alt="imgagen" className="simg" />
                    <img src={Img[25].img} alt="imgagen" className="simg" />
                    <img src={Img[26].img} alt="imgagen" className="simg" />
                    <img src={Img[28].img} alt="imgagen" className="simg" />
                    <img src={Img[29].img} alt="imgagen" className="simg" />
                </div>
                <div className="buttons">
                    <Link to="/tercero">
                        <button>Anterior</button>
                    </Link>
                    <Link to="/quinto">
                        <button>Siguiente</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default four;