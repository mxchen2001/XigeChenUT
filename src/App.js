import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/home'

// Using Grey: #959595 | Cream: #e2e0d4 | Off Pink: #cebeb9 | Pure Pink: #e7cac2 | Soft Grey:#e8e8e8

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



function Footer() {
    return (
      <AppBar style={{ background: '#959595' }} position="static" >
        <Toolbar>
        </Toolbar>
      </AppBar>
    );
}

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <AppBar style={{ background: '#959595' }} position="static" >
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <NavLink 
              activeStyle={{
                fontWeight: "bold",
                color: "white"
              }} 
              style={{
                color: "#bdbdbd",
                textDecoration: 'none'
              }}
              to="/">
                  Home
              </NavLink>
            </Typography>
            <Button>
              <NavLink 
              activeStyle={{
                fontWeight: "bold",
                color: "white"
              }} 
              style={{
                color: "#bdbdbd",
                textDecoration: 'none'
              }}
              to="/">
                Overview
              </NavLink>
            </Button>
            <Button>
              <NavLink 
                activeStyle={{
                  fontWeight: "bold",
                  color: "white"
                }}
                style={{
                  color: "#bdbdbd",
                  textDecoration: 'none'
                }}
                to="/">
                  Classes
              </NavLink>
            </Button>
          </Toolbar>
        </AppBar>
        <Switch>
          {/* <Route path="/EEOverview" render={() => (
            )} />
          <Route path="/EEClass" render={() => (
            )}/> */}
          <Route path="/" render={() => (
              <Home />
          )} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;