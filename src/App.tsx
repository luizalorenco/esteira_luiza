import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem vindo ao carrinho de compras
          Escreva o nome de um item para adiciona-lo ao carrinho: __________
        </p>
        <section>
    <h2>Contact information</h2>
    <fieldset>
      <legend>Title</legend>
      <ul>
          <li>
            <label htmlFor="title_1">
              <input type="radio" id="title_1" name="title" value="M." ></input>
              Mister
            </label>
          </li>
          <li>
            <label htmlFor="title_2">
              <input type="radio" id="title_2" name="title" value="Ms."></input>
              Miss
            </label>
          </li>
      </ul>
    </fieldset>
    <p>
      <label htmlFor="name">
        <span>Name: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="text" id="name" name="username"></input>
    </p>
    <p>
      <label htmlFor="mail">
        <span>E-mail: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="email" id="mail" name="usermail"></input>
    </p>
    <p>
      <label htmlFor="pwd">
        <span>Password: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="password" id="pwd" name="password"></input>
    </p>
</section>


          <img src="https://www.imagensanimadas.com/data/media/1633/carrinho-de-supermercado-imagem-animada-0016.gif"></img>
          
        
      </header>
    </div>
  );
}

export default App;
