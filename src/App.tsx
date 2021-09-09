import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as Pages from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Pages.Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
