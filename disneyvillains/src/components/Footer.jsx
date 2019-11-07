import React, { Component } from 'react'
import {Navbar, Nav, FormControl, Button, Form} from 'react-bootstrap';
import { Route, BrowserRouter, Switch, Link,} from 'react-router-dom';
import Facebook from '../assets/images/facebook.png';
import Twitter from '../assets/images/twitter.png';
import Youtube from '../assets/images/youtube.png';
import { Image } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <div>
            <BrowserRouter>
          <Navbar ClassName="navbar">
              <div className="socialcontact">
                <a href="https://www.facebook.com" target="_blank"><Image src={Facebook}/></a>
                <a href="https://twitter.com" target="_blank"><Image src={Twitter}/></a>
                <a href="https://www.youtube.com" target="_blank"><Image src={Youtube}/></a>
                </div>
             </Navbar>
             </BrowserRouter>
             </div>
        )
    }
}
