import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header.js';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Footer from './components/Footer.js';
import Container from '@material-ui/core/Container';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";


const useStyles = makeStyles((theme) => ({
  container: {
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
  },
}));

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];


export default function App() {
  const classes = useStyles();

  return (
    <Switch>
      <>
            <CssBaseline />
          <Container maxWidth="lg" className={classes.container} >
            <Header title="MINE" sections={sections}/>
            <Route exact path="/" component={Homepage}/> 
            <Route path="/registration" component={Registration}/> 
          </Container>

      <Footer title="Footer" description="Something here to give the footer a purpose!" />
      </>
    </Switch>

  );
}