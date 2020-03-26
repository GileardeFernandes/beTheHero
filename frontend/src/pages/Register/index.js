import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.svg';


export default function Register(){
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [whatsapp, setwhatsapp] = useState('');
     const [city, setCity] = useState('');
     const [uf, setUf] = useState('');
     const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        try {
            const data = {
                name,
                email,
                whatsapp,
                city,
                uf
            }
            const reponse = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${reponse.data.id} `);
            history.push('/');

        } catch (error) {
            alert('Houve um erro no seu cadastro, tente novamente mais tarde !');
        }

    }

    return(
       <div className="register-container">
           <div className="content">
                <section>
                    <img src={logoImg} alt="be the hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os caosos da sua ONG.</p>

                    <Link to="/" className="back-link" >
                        <FiArrowLeft size={16} color="#e02041" />
                      Voltar a  tela de logon
                   </Link>
                </section>
            
                <form  onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={ e =>setName(e.target.value)}
                        />

                    <input 
                         type="Email" 
                         placeholder="Email" 
                         value={email}
                         onChange={e => setEmail(e.target.value)}
                         />
                    <input 
                         placeholder="Whatsapp" 
                         value={whatsapp}
                         onChange={e => setwhatsapp(e.target.value)}
                         />

                    <div className="input-group">
                        <input 
                             placeholder="Cidade"
                             value={city}
                             onChange={e => setCity(e.target.value)}
                             />
                        <input 
                             placeholder="UF"
                             style={{width:80}}
                             value={uf}
                             onChange={e => setUf(e.target.value)}
                             />
                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
           </div>
       </div>
        
    )
};