import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import { UserProvider } from "./Components/UserContext/UserContext";
import Remove from "./Components/Remove/Remove";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Switch>
            <Route path="/remove/:id">
              <Remove></Remove>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
