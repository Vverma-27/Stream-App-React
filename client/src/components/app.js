import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import StreamCreate from "./stream/StreamCreate";
import StreamDelete from "./stream/StreamDelete";
import StreamEdit from "./stream/StreamEdit";
import StreamList from "./stream/StreamList";
import StreamShow from "./stream/StreamShow";
import Header from "./header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/create" exact component={StreamCreate} />
          <Route path="/stream/delete" exact component={StreamDelete} />
          <Route path="/stream/edit" exact component={StreamEdit} />
          <Route path="/stream/show" exact component={StreamShow} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
