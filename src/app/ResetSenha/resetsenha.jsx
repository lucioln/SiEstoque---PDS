import React, {useState} from 'react';
import {Link}  from 'react-router-dom';
import './resetsenha.css';

import firebase from '../Config/firebase';
import 'firebase/auth';

function ResetSenha(){
    
    const [email, setEmail] = useState('');
    
    function recuperarSenha(){
       firebase.auth().sendPasswordResetEmail(email).then(function (resutado) {
          alert("email enviado com sucesso!");
        }).catch(erro=>{
          alert(erro.message);
      })
    }

    return <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
        <img className="mb-4" src="../images/logo.png" alt="SiEstoque logo" />
        <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>

        <div className="form-floating">
          <input onChange={(event)=>setEmail(event.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
          <label for="floatingInput">E-mail</label>
        </div>
             
        <button onClick={recuperarSenha} className="w-100 btn btn-lg btn-primary" type="button">Enviar</button>

        <div className="login-links mt-5">
          <Link to="/app/novaconta" className="mx-3">Criar uma conta.</Link>
        </div>

        <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por <a href='/'>SiEstoque</a></p>
      </form>
    </div>
  }

export default ResetSenha;