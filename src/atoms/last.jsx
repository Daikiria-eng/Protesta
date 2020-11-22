import React from 'react';
import Img from '../imgs';

function final(){
    return(
        <>
            <div className="box">
                <h1>Cuidar el medio mabiente</h1>
                <h2>Es ahora nuestro objetivo</h2>
                <center><img src={Img[0].img} alt="iesadep" className="simg"/></center>
            </div>
        </>
    )
}
export default final;