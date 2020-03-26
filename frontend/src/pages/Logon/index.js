import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'
import api from './../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';
export default function Logon() {

    const [id, setID] = useState('');
    const history = useHistory();
    async function handleLogin(e) {
        e.preventDefault();
        try {

            const response = await api.post('sessions', { id });
            localStorage.setItem('ongID', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch (error) {
            alert('Flaha no login, tente novamente !!');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="be the hero" />

                <form onSubmit={handleLogin} >
                    <h1>Faça seu Logon</h1>

                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setID(e.target.value)}
                    />
                    <button type="submit" className="button">Entrar</button>

                    <Link to="/register" className="back-link" >
                        <FiLogIn size={16} color="#e02041" />
                    Não tenho cadastro
                </Link>
                </form>
            </section>

            <img src={herosImg} alt="Heros" />

        </div>
    )
}