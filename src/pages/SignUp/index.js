import {useState} from 'react';
import './styles.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';

export default function SignUp(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        alert('clicou');
    }
    return (
        <div className="container-center"> 
            <div className="login">
                <div className="logo-area">
                    <img src={logo} />
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Cadastrar uma conta</h1>
                    <input type="text" placeholder="exemplo: João" value={nome}
                        onChange={(e)=>setNome(e.target.value)}
                    />
                    <input type="text" placeholder="exemplo: email@email.com" value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input type="password" placeholder="*********"  value={password}
                        onChange={(e)=>setPassword(e.target.value)} />
                    <button>Cadastrar</button>
                </form>
                <Link  to="/" >Já tem uma conta?</Link>
            </div>
        </div>
    );
}