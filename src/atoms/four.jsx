import React from 'react';
import { Link } from 'react-router-dom';
import Fourt from '../assets/14.jpg';
import Sixt from '../assets/16.jpg';
import Eightt from '../assets/18.jpg';
import Twt from '../assets/23.jpg';
import Twth from '../assets/25.jpg';
import Twf from '../assets/27.jpg';
import Tws from '../assets/28.jpg';
import Twe from '../assets/30.jpg';
import Twn from '../assets/31.jpg';

function four() {
    return (
        <>
            <div className="box">
                <div className="imgs">
                    <img src={Fourt} alt="imgagen" className="simg" />
                    <img src={Sixt} alt="imgagen" className="simg" />
                    <img src={Eightt} alt="imgagen" className="simg" />
                    <img src={Twt} alt="imgagen" className="simg" />
                    <img src={Twth} alt="imgagen" className="simg" />
                    <img src={Twf} alt="imgagen" className="simg" />
                    <img src={Tws} alt="imgagen" className="simg" />
                    <img src={Twe} alt="imgagen" className="simg" />
                    <img src={Twn} alt="imgagen" className="simg" />
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