import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./Home";
import Editor from "./Editor";
import { pageLoad } from "./redux/actions/pageAction";
import Dashboard from "./components/Dashboard";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    pageLoad()(dispatch);
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/editor/:pageId" component={Editor}></Route>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
