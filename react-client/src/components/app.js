import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import styles from './../../dist/styles.scss';
import { Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
   
   
          <NavBar id="nav" class="navbar fixed-top navbar-toggleable-sm" data-spy="affi" />
    
          <Route exact path="/" component={HomePage} className = "first" />
  
  
          <Footer />
          </div>
      </Router>
    )
  }
}

export default App;