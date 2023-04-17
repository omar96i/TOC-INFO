import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import Layout from "../components/Template/Layout/Layout";
import HomePage from "../pages/HomePage";
import NotFound from "../components/organisms/NotFound/NotFound";

import { createBrowserHistory, createMemoryHistory } from "history";
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'
import Maintenance from "../pages/Maintenance";
const Routes = () => {
  const history =
    typeof window !== "undefined"
      ? createBrowserHistory()
      : createMemoryHistory();

  return (
    <Router history={history}>
      <Switch>
        <Layout>
          {/* <Route path="/blog" component={Home} /> */}
          <Route path="/404" component={NotFound} />
          <Route path="/" component={HomePage} />
          
        </Layout>
      </Switch>
    </Router>
  );
};

export default Routes;
