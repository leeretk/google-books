import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooks from "./pages/SavedBooks";
import AddBooks from "./pages/AddBooks";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Nav from "./components/Nav/Nav";
import NavTabs from "./components/NavTabs";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <NavTabs />
        <Switch>
          <Route exact path="/" component={SavedBooks} />
          <Route exact path="/books" component={SavedBooks} />
          <Route exact path="/books" component={AddBooks} />
          <Route exact path="/books/:id" component={Search} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
