import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import Login from "./components/Login/Login";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { CommerceContextProvider } from "./contexts/ComerceContext";
import Chart from "./components/Chart/Chart";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <CommerceContextProvider>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/criar-conta" component={CreateAccount} />
          </Switch>
          <Switch>
            <Route path="/" exact>
                <Header />
                <Products />
            </Route>
            <Route path={"/meus-produtos"}>
                <Header />
                <Chart />
            </Route>
          </Switch>
        </CommerceContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
