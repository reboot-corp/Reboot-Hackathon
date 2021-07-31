import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Main } from "./Main";
import { PageNotFound } from "./PageNotFound";
import { Play } from "./Play";

export const Routes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/play" component={Play} />
          <Route path="/404" component={PageNotFound} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
