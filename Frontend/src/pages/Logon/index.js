import React, {useState} from 'react';
import {FiLogIn}  from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';
import api from '../../services/api';



export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

  async  function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions',{id});
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);

            history.push('/profile');
        } catch (err) {
            alert('Falha no login');
        }
    }


    return(
        <div className="logon-container">
            <section className="form">
        <img src={logoImage} alt="logo"/>
            <form onSubmit={handleLogin}>
            <h1>Faça seu Logon</h1>
            <input placeholder="Sua ID"
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <button className="button" type="submit">Entrar</button>

            <Link className="black-link" to="/register">
            <FiLogIn size={16} color="#e02041"/>
             Não sou cadastrado
             </Link>
        </form>
            </section>
            <img src={heroesImg} alt="heroes"/>
        </div>
    )
}