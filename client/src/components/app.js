import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import StreamCreate from "./stream/StreamCreate";
import StreamDelete from "./stream/StreamDelete";
import StreamEdit from "./stream/StreamEdit";
import StreamList from "./stream/StreamList";
import StreamShow from "./stream/StreamShow";
import Header from "./header";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/create" exact component={StreamCreate} />
          <Route path="/stream/delete/:id" exact component={StreamDelete} />
          <Route path="/stream/edit/:id" exact component={StreamEdit} />
          <Route path="/stream/show/:id" exact component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
