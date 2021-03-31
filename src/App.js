import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, SecondPage } from "./routes";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div className="App">
        <Navbar />
        <div className="container-sm my-3">
          <Switch>
            <Route exact={true} path="/" component={Home}></Route>
            <Route path="/secondPage" component={SecondPage}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
