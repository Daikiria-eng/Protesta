import React from 'react';
import Thirt from '../assets/13.jpg';
import Fourt from '../assets/14.jpg';
import Four from '../assets/4.jpg';
import Twentyseven from '../assets/29.jpg';
import {Link} from 'react-router-dom';

function main(){
    return(
        <>
            <div className="box">
                <h1 id="first_title">Un llamado de Atención</h1>
                <h4 id="first_info">Los seres humanos viven en sí mismados simplemente
                preocupados por su propio bienestar; sólo cuando las injusticias,
                y problemas lo tocan, es que se llega a sensibilizar y actuar sobre
                el asunto. Y aquí es donde radica el problema, tenemos que hacer consciencia
                antes de que sea demasiado tarde</h4> 
                <div className="fbox">
                    <img src={Thirt} id="fimgs" alt="imagen"/>
                    <img src={Fourt} id="fimgs" alt="imagen"/>
                    <img src={Four} id="fimgs" alt="imagen"/>
                    <img src={Twentyseven} id="fimgs" alt="imagen"/>
                </div>
                <Link to="/segundo">
                    <center><button>Siguiente</button></center>
                </Link>
            </div>
        </>
    )
}
export default main;