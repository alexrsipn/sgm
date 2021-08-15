import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
      <Router>
          <Switch>
              <AppRouter/>
          </Switch>
      </Router>
  );
}

export default App;
