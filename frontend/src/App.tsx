import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
