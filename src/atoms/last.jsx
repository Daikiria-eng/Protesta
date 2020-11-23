import React from 'react';
import Logo from '../assets/iesadep.jpg';

function final(){
    return(
        <>
            <div className="box">
                <h1>Cuidar el medio mabiente</h1>
                <h2>Es ahora nuestro objetivo</h2>
                <center><img src={Logo} alt="iesadep" className="simg"/></center>
            </div>
        </>
    )
}
export default final;