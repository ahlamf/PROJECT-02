import React, { Component } from 'react';
import {Navbar, Nav, FormControl, Button, Form} from 'react-bootstrap';
import '../App.css';
import { Route, BrowserRouter, Switch, Link,} from 'react-router-dom';
import Villainscharecter from './Villainscharecter';
import App from '../App';
import Disneymovies from './Disneymovies';
import Disneylogo from '../assets/images/disneycas.jpg';

 
  
  export default class Navbarmenu extends Component {
    render() {
      return (
        <div >
           <BrowserRouter>
              <Navbar className="navbar">
                 <img className="disneylogo" src={Disneylogo}/>
                 <h1>DISNEY VILLAINS</h1>
                 <hr/>
                 <Link to="/Home">HOME</Link>
                 <Link  className="nav-link" to="/Villainscharecter">VILLAINS  CHARACTERS</Link>
                 <Link  className="nav-link" to="/Disneymovies">VILLAINS  MOVIES</Link>
             </Navbar>
             <Switch>
             <Route  path="/Home" component={App} />
             <Route  path="/Villainscharecter" component={Villainscharecter} />
             <Route  path="/Disneymovies" component={Disneymovies} />
            </Switch>
         </BrowserRouter>    
        </div>
       
      )
    }
  }
  