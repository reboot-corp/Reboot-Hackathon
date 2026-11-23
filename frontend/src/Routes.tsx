import React from "react";
import { BrowserRouter, Route, Routes as RouteSwitch } from "react-router";

import { Main } from "./Main";
import { PageNotFound } from "./PageNotFound";
import { Play } from "./Play";
import { ScrollToHash } from "./ScrollToHash";

export const Routes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToHash />
        <RouteSwitch>
          <Route path="/" element={<Main />} />
          <Route path="/play" element={<Play />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </RouteSwitch>
      </BrowserRouter>
    </>
  );
};
