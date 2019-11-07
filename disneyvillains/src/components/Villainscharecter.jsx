import React, { Component } from 'react';
import {Card, CardGroup, Button, CardDeck,Navbar, Nav, FormControl, Form } from 'react-bootstrap';
import { Route, BrowserRouter, Switch, Link,} from 'react-router-dom';
import Villians from '../assets/images/Villains.jpg';
import Jafar from '../assets/images/Jafar.jpg';
import Scar from '../assets/images/scar.jpg';
import Maleficent from '../assets/images/Maleficent.jpg';
import ModalVideo from 'react-modal-video';
import Disneymovies from './Disneymovies';




export default class Villainscharecter extends Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }


    render() {
        return (
            <div className="Villainscharecters">
              <BrowserRouter>
                <h2>VILLAINS  CHARACTERS</h2>
                <CardDeck>
                  <Card text="white">
                     <Card.Img className="fiximg" variant="top" src={Jafar} />
                     <Card.Body className="fixcardbody" outline color="primary" className="cards"  >
                       <Card.Title className="title">JAFAR</Card.Title>
                       <Card.Text>
                       Jafar is the main antagonist of Disney's 1992 animated feature film Aladdin. As Royal Vizier of Agrabah, he was presented as the Sultan's most trusted and loyal advisor. In truth, the imperious Jafar held passionate disdain for the Sultan and dedicated the latter half of his life to gaining ownership of a magic lamp containing an all-powerful genie—to that end, Jafar would control cosmic power, which he would use to overtake the throne and the world at large.
                       Jafar is loosely based off the wicked sorcerer and vizier from the Aladdin folk tale in the One Thousand and One Nights collection of stories. With an elegant, yet cheeky approach to villainy, coupled with a dry sense of humor and menace, Jafar is amongst Disney's most renowned villains, and would later feature as a primary member of the Disney Villains franchise
                       </Card.Text>
                    </Card.Body>
                    <Link className="nav-link" to="/Disneymovies">Movie Details</Link>
                    <br/>
                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='eGD2m-nnyL4' onClose={() => this.setState({isOpen: false})} />
                    <Button variant="primary"  onClick={this.openModal} >Play Song</Button>
                 </Card>
                <Card text="white">
                    <Card.Img className="fiximg" variant="top" src={Scar} />
                    <Card.Body outline color="primary" className="cards" >
                      <Card.Title className="title">SCAR</Card.Title>
                      <Card.Text>
                       Scar is the main antagonist of Disney's 1994 animated feature film, The Lion King. As the younger brother of Mufasa and second-born prince of the Pride Lands, Scar was next in line to assume the throne as king. His chances were lost, however, at the birth of his nephew Simba. This embittered Scar with jealousy and a sense of entitlement, prompting him to develop a regicidal plot to take over the kingdom, with the aid of his hyena henchmen.
                       As one of Disney's most infamous villains—made especially notorious for his success in murdering Mufasa—Scar is a primary member of the Disney Villains franchise
                     </Card.Text>
                  </Card.Body>
                  <Button variant="primary" >Movie Details</Button>
                  <br/>
                  <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='zPUe7O3ODHQ' onClose={() => this.setState({isOpen: false})} />
                  <Button variant="primary"  onClick={this.openModal} >Play Song</Button>
              </Card>
              <Card text="white">
                 <Card.Img className="fiximg" variant="top" src={Maleficent} />
                 <Card.Body className="cards" >
                 <Card.Title className="title">MALEFICENT</Card.Title>
                 <Card.Text>
                   Maleficent is an evil fairy and the main antagonist of Disney's 1959 animated feature film, Sleeping Beauty. Maleficent is an incarnation of pure evil, and responsible for all misfortune in King Stefan's kingdom. She takes offense at not being invited to the christening of Princess Aurora and attempts revenge on King Stefan and Queen Leah by cursing the princess. She appears to be particularly disdainful of the three good fairies Flora, Fauna, and Merryweather, her polar opposites, who do all in their power to keep Maleficent's overwhelming evil magic at bay. She is frequently accompanied by her pet raven Diablo.
                   With her dark, elegant design, dramatic and flamboyant animation, and unlimited arsenal of magic powers at her command, Maleficent is one of the most popular and recognizable Disney Villains, in addition to being one of the primary members of the official franchise
                 </Card.Text>
               </Card.Body>
               <Button variant="primary">Movie Details</Button>
               <br/>
               <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='OCjn4qoYmD0' onClose={() => this.setState({isOpen: false})} />
              <Button variant="primary"  onClick={this.openModal} >Play Song</Button>
              </Card>
             </CardDeck>

{/* -----------------coming soon-------------------------------------------------------- */}
<br/>
               <CardDeck>
               <Card text="white">
    <Card.Img variant="top" src={Villians} />
    <Card.Body className="cards" >
      <Card.Title className="title">Villains</Card.Title>
      <Card.Text>
        Villains
      </Card.Text>
    </Card.Body>
    <Button variant="primary">Movie Details</Button>
    <br/>
    <Button variant="primary">Play Song</Button>
  </Card>
  <Card text="white">
    <Card.Img variant="top" src={Villians} />
    <Card.Body className="cards" >
      <Card.Title className="title">Villains</Card.Title>
      <Card.Text>
      Villains
      </Card.Text>
    </Card.Body>
    <Button variant="primary">Movie Details</Button>
    <br/>
    <Button variant="primary">Play Song</Button>
  </Card>
  <Card text="white">
    <Card.Img variant="top" src={Villians} />
    <Card.Body className="cards" >
      <Card.Title className="title">Villains</Card.Title>
      <Card.Text>
      Villains
      </Card.Text>
    </Card.Body>
    <Button variant="primary">Movie Details</Button>
    <br/>
    <Button variant="primary">Play Song</Button>
  </Card>
</CardDeck>
<Switch>
 <Route  path="/Disneymovies" component={Disneymovies} /> 
 </Switch>
</BrowserRouter>
</div>
        )
    }
}
