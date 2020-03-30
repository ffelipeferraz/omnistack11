import React, {useState} from 'react';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import logoImage from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIncidents(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };
        try {
            await api.post('incidents',data,{
                headers:{
                    Authorization: 
                        ongId,                 
                }
            })
            alert('Caso cadastrado com sucesso');
          /*após cadastrar retorna pra página profile*/
            history.push('/profile');
        } catch (error) {
            alert("Caso não cadastrado");
        }
    }

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Logo" />
                    <h1> Cadastrar novo caso </h1>
                    <p> Descreva o caso detalhado para encontrar um herói para resolver isso</p>
                    <Link className="black-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
             Voltar para HOME
             </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                    placeholder="Título do caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                     />
                    <textarea 
                    placeholder="Descrição do caso"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                    placeholder="Valor em R$"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                     />
                    
                    <button className="button" type="submit"> Cadastrar </button>
                </form>
            </div>
        </div>
    );

}
