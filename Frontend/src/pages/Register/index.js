import React, {useState} from 'react';
import logoImage from '../../assets/logo.svg';
import './styles.css';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';


export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsaap, setWhatsaap] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsaap,
            city,
            uf
        }
        try{          
       const response = await api.post('ongs',data);
       alert(`Seu ID de acesso: ${response.data.id}`);
       history.push('/');
       
        }catch(err){
            alert('Erro no cadastro, tente novamente');
        }
    }
    return (
    <div className="register-container">
        <div className="content">
            <section>
            <img src={logoImage} alt="Logo"/>
            <h1> Cadastro </h1>
            <p> Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos da sua ONG</p>
           <Link className="black-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
             Voltar
             </Link>
            </section>
            <form onSubmit={handleRegister}>
            <input placeholder="Nome da ONG"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input type="email" placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
            />
            <input placeholder="WhatsApp"
                        value={whatsaap}
                    onChange={e => setWhatsaap(e.target.value)}
            />
            <div className="input-group">
                <input placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                />
                <input placeholder="UF" style={{width:80}}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                />
                </div>
            <button className="button" type="submit"> Cadastrar </button>
            </form>
        </div>
    </div>
    
    );
    
}