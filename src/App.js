import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import CreateEvent from "./pages/Create";
import ViewEvent from "./pages/ViewEvent";
import Home from "./pages/Home";

function AppRouter() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar color="primary" position="sticky">
        <Toolbar style={{ padding: 16 }}>
          <Typography variant="h3" style={{ color: "white", flexGrow: 1 }}>
            eVentually
          </Typography>
          <Button
            component={Link}
            to="/"
            style={{ fontWeight: 700, paddingLeft: 16, color: "white" }}
          >
            Home
          </Button>

          <Button
            component={Link}
            to="/create"
            style={{ fontWeight: 700, paddingLeft: 16, color: "white" }}
          >
            Create
          </Button>
          <Button component={Link}
            to="/view/1"
            style={{ fontWeight: 700, paddingLeft: 16, color: "white" }}
          >
            View something
          </Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" component={CreateEvent} />
        <Route path="/view/" component={ViewEvent} />
      </Switch>
    </div>
  );
}

export default AppRouter;
