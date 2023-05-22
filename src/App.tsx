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
        </p>
        <a
          className="App-link"
          href="https://www.imagensanimadas.com/data/media/1633/carrinho-de-supermercado-imagem-animada-0016.gif"
          target="_blank"
          rel="noopener noreferrer"
        
        >
          <img src="https://www.imagensanimadas.com/data/media/1633/carrinho-de-supermercado-imagem-animada-0016.gif"></img>
          Escreva o nome de um item para adiciona-lo ao carrinho: __________
        </a>
      </header>
    </div>
  );
}

export default App;
