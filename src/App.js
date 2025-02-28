import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Particle from './components/Particle';
import Headertext from './components/Headertext';
import Download from './components/Download';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Fultus from './components/Fultus';
import WYR from './components/WYR';
import Employee from './components/Employee';
import SIGame from './components/SIGame';
import BJ from './components/BJ';
import Twitbot from './components/Twitbot';
import WebDevClass from './components/WebDevClass';
import ECommSite from './components/ECommSite';
import AppStore from './components/AppStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={Aboutme} />
          <Route path="/Contactus" exact component={Contactus} />
          <Route path="/Resumesite" exact component={Resumesite} />
          <Route path="/FultusNews" exact component={FultusNews} />
          <Route path="/Wouldyourather" exact component={Wouldyourather} />
          <Route path="/EmployeeDB" exact component={EmployeeDB} />
          <Route path="/SIGame" exact component={SpaceInvade} />
          <Route path="/BJGame" exact component={Blackjack} />
          <Route path="/TwitterBot" exact component={Twitterbot} />
          <Route path="/3135WebDev" exact component={WebDev} />
          <Route path="/ECommerceSite" exact component={EcommerceSite} />
          <Route path="/AppStore" exact component={ASAppStore} />
        </Switch>
      </div>
    </Router>
    </>
  );
}

const Home = () => (
  <>
    <Navigation />
    <Particle />
    <div class="img-1">
      <Headertext />
      {/* <Download /> */}
    </div>
  </>
)

const Aboutme = () => (
  <>
    <Navigation />
    <About />
  </>
)

const Contactus = () => (
  <>
    <Navigation />
    <Contact />
  </>
)

const Resumesite = () => (
  <>
    <Navigation />
    <Resume />
  </>
)

const FultusNews = () => (
  <>
    <Navigation />
    <Fultus />
  </>
)

const Wouldyourather = () => (
  <>
    <Navigation />
    <WYR />
  </>
)

const EmployeeDB = () => (
  <>
    <Navigation />
    <Employee />
  </>
)

const SpaceInvade = () => (
  <>
    <Navigation />
    <SIGame />
  </>
)

const Blackjack = () => (
  <>
    <Navigation />
    <BJ />
  </>
)

const Twitterbot = () => (
  <>
    <Navigation />
    <Twitbot />
  </>
)

const WebDev = () => (
  <>
    <Navigation />
    <WebDevClass />
  </>
)

const EcommerceSite = () => (
  <>
    <Navigation />
    <ECommSite />
  </>
)

const ASAppStore = () => (
  <>
    <Navigation />
    <AppStore />
  </>
)

export default App;
