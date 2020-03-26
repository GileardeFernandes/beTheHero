import React, {useState} from 'react';
import api from './../../services/api';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function NewIcident(){

      const ongID = localStorage.getItem('ongID');
      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const [value, setValue] = useState('');

      const history = useHistory();

      async function handleNewIcident(e){
        e.preventDefault();
         
        const data = {
            title,
            description,
            value
        }
        try {

            await api.post('incidents',data, {
                headers: {
                    Authorization: ongID,
                }
            });

           history.push('/profile');    
        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente !');
        }
      }
    return(
        <div className="newincident-container">
            <div className="content">
                 <section>
                     <img src={logoImg} alt="be the hero" />
 
                     <h1>Cadastrar novo caso</h1>
                     <p>Descreva o caso detalhadamente para econtrar um herói  para resolver isso</p>
 
                     <Link to="/profile" className="back-link" >
                         <FiArrowLeft size={16} color="#e02041" />
                       Voltar para home
                    </Link>
                 </section>
             
                 <form onSubmit={handleNewIcident} >
                     <input 
                     placeholder="Título do caso" 
                     value={title}
                     onChange={e => setTitle(e.target.value)}
                     />
                     <textarea  
                     placeholder="Descrição" 
                     value={description}
                     onChange={e => setDescription(e.target.value)}
                     />
                     
                     <input 
                     placeholder="Valor em reais" 
                     value={value}
                     onChange={e => setValue(e.target.value)}
                     />
                     <button type="submit" className="button">Cadastrar</button>
                 </form>
            </div>
        </div>  
     )
}