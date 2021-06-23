import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from './components/home'
import EE306Labs from './components/labs/ee306Labs'
import EE312Labs from './components/labs/ee312Labs'
import EE319Labs from './components/labs/ee319Labs'
import EE460nLabs from './components/labs/ee460nLabs'
import EE422Labs from './components/labs/ee422Labs'

import NotesHome from './components/notesHome'
import EE461lNotes from './components/notes/ee461lNotes'
import EE360cNotes from './components/notes/ee360cNotes'

import notAvaiable from './components/notAvailable'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
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
  bar: {
    background: '#959595'
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <IconButton href='https://www.xige.page/'>
      <ArrowBackIosIcon/>
    </IconButton>
    // <AppBar xs={12} position="static" >
    //   <Toolbar>
    //     <NavLink 
    //     activeStyle={{
    //       fontWeight: "bold",
    //       color: "white"
    //     }} 
    //     style={{
    //       color: "#000000",
    //       textDecoration: 'none'
    //     }}
    //     to="/">
    //       <Button>
    //         <Typography variant='h2' className={classes.title} style={{fontSize: '1.7rem', color: "white"}}>
    //           Home
    //         </Typography>
    //       </Button>
    //     </NavLink>
    //     {/* <Button>
    //       <NavLink 
    //       activeStyle={{
    //         fontWeight: "bold",
    //         color: "white"
    //       }} 
    //       style={{
    //         color: "#bdbdbd",
    //         textDecoration: 'none'
    //       }}
    //       to="/Notes">
    //         Notes (work-in-progress)
    //       </NavLink>
    //     </Button> */}
    //   </Toolbar>
    // </AppBar>
  );
}

function Footer() {
    const classes = useStyles();

    return (
      <AppBar className={classes.bar} position="relative" >
        <Toolbar>
          <Grid justify={"center"} alignItems={"center"} spacing={3} container>
            <Grid item>
              <IconButton color="inherit" target="_blank" href="https://www.linkedin.com/in/xige-michael-chen-7a4a45190/">
                <LinkedInIcon/>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="inherit" target="_blank" href="https://github.com/mxchen2001">
                <GitHubIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="inherit" target="_blank" href="mailto:mxchen2001@utexas.edu">
                <MailOutlineIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
}

function App() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Router basename="/XigeChenUT">
          <HashRouter>
            <Navbar/>
              <Switch>
                <Route exact path="/EE306Labs" component={EE306Labs} />
                <Route exact path="/EE312Labs" component={EE312Labs} />
                <Route exact path="/EE319Labs" component={EE319Labs} />
                <Route exact path="/EE460nLabs" component={EE460nLabs} />
                <Route exact path="/EE422Labs" component={EE422Labs} />
                <Route exact path="/Notes" component={NotesHome} />
                <Route exact path="/Notes/EE461L" component={EE461lNotes} />
                <Route exact path="/Notes/EE360C" component={EE360cNotes} />
                <Route exact path="/pageNA" component={notAvaiable} />
                <Route exact path="/" component={Home} />
              </Switch>
              <Footer />
          </HashRouter>
        </Router>
      </div>
    </div>
  );
}

export default App;