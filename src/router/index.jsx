import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home"
import Inst from "../pages/instructions"
import Page404 from "../pages/404"

const RouterView = () => {
  return (
    <>
      <Router>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/instruction" component={Inst} />
              <Route path="*" component={Page404} />
          </Switch>
      </Router>
    </>
  );
};

export default RouterView;