import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetails from "./components/ItemDetails";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
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
