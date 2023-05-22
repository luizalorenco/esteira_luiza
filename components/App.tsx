import React from "react";
import { Link, Route, Router, Switch } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetails from './components/ItemDetails';
import "./App.css";
import "../App.tsx";

const App = () => {
  return (
    <Router location={""} navigator={undefined}>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <ItemList />
          </Route>
          <Route path="/items/:id">
            <ItemDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
