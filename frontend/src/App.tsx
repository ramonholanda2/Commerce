import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import Login from "./components/Login/Login";
import CreateAccount from "./components/CreateAccount/CreateAccount";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/create-account" exact>
            <CreateAccount />
          </Route>
        </Switch>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
