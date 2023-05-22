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
        <form>
  <fieldset>
    <legend>Fruit juice size</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small" />
      <label htmlFor="size_1">Small</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium" />
      <label htmlFor="size_2">Medium</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" value="large" />
      <label htmlFor="size_3">Large</label>
    </p>
  </fieldset>
</form>

          <img src="https://www.imagensanimadas.com/data/media/1633/carrinho-de-supermercado-imagem-animada-0016.gif"></img>
          
        
      </header>
    </div>
  );
}

export default App;
