import React from 'react';
import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi'
import './styles.css';

import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';
export default function Logon(){
    return (
       <div className="logon-container">
           <section className="form">
              <img src={logoImg} alt="be the hero"/>

              <form >
                <h1>Faça seu Logon</h1>

                <input placeholder="Sua ID"/>
                <button type="submit" className="button">Entrar</button>

                <Link  to="/register" className="back-link" > 
                <FiLogIn size={16} color="#e02041" />
                    Não tenho cadastro
                </Link>
              </form>
           </section>

           <img src={herosImg} alt="Heros"/>

       </div>
    )
}