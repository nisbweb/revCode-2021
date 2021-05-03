import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Inst from "../pages/instructions";
import Page404 from "../pages/404";
import Question from "../pages/questionScreen";
import CodeScreen from "../pages/codeScreen";

const RouterView = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/instruction" component={Inst} />
          <Route path="/game" component={Question} />
          <Route path="/codeScreen/:number" component={CodeScreen} />
          <Route path="*" component={Page404} />
        </Switch>
      </Router>
    </>
  );
};

export default RouterView;
