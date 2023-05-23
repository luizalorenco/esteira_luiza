import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
    <h2>CARRINHO DE COMPRAS</h2>
   
    <p>
      <label htmlFor="name">
        <span>Nome do item:: </span>
        
      </label>
      <input type="text" id="name" name="username"></input>
    </p>
    <p>
      <label htmlFor="mail">
        <span>Preço: </span>
        
      </label>
      <input type="email" id="mail" name="usermail"></input>
    </p>
    <p>
      <label htmlFor="pwd">
        <span>Descrição: </span>
       
      </label>
      <input type="text" id="pwd" name="text"></input>
    </p>
    <p>
      <label htmlFor="pwd">
        <span>Quantidade: </span>
        
      </label>
      <input type="text" id="pwd" name="text"></input>
    </p>
</section>


          <img src="https://www.imagensanimadas.com/data/media/1633/carrinho-de-supermercado-imagem-animada-0016.gif"></img>
          
        
      </header>
    </div>
  );
}

export default App;
