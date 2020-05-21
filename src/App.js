import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
       <Router>
      <div>
      <Header />
         <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
