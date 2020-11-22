import React, { Component } from 'react';
import '../style.css';
import Imgs from '../imgs';
import { Link } from 'react-router-dom';

class navbar extends Component {
  render() {
    return (
      <>
        <header>
          <div className="headernav">
            <input type="checkbox" id="buttonnav" />
            <label for="buttonnav"><img src="" alt="Desplegar" id="buttonNav" /></label>
            <nav className="bar">
              <ul id="items">
                <Link className="li" to="/">
                  <li id="image_RANK"><img src={Imgs[0].img} alt="I.E SAdeP" id="navLogo" /></li>
                </Link>
                <Link className="li" to="/">
                  <li>Home</li>
                </Link>
                <Link className="li" to="/segundo">
                  <li>Sección uno</li>
                </Link>
                <Link className="li" to="/tercero">
                  <li>Sección dos</li>
                </Link>
                <Link className="li" to="/cuarto">
                  <li>Sección tres</li>
                </Link>
                <Link clasName="li" to="/Quinto">
                  <li>Sección Cuatro</li>
                </Link>
                <Link to="/sexto">
                  <li id="enter">sección cinco</li>
                </Link>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}
export default navbar;