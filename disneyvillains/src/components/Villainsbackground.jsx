import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import DisneyViallianbg from '../assets/images/DisneyViallianbg.jpg';



export default class Villainsbackground extends Component {
    render() {
        return (
            <div>
                <Image className="backgroundbg" src={DisneyViallianbg} bsPrefix />
            </div>
        )
    }
}


