import React, { Component } from 'react';
import {Card, CardGroup, Button, CardDeck,Navbar, Nav, FormControl, Form } from 'react-bootstrap';
import { Route, BrowserRouter, Switch, Link,} from 'react-router-dom';
import Villians from '../assets/images/Villains.jpg';
import Jafar from '../assets/images/Jafar.jpg';
import Scar from '../assets/images/scar.jpg';
import Maleficent from '../assets/images/Maleficent.jpg';
import Mothergoal from '../assets/images/Mothergoal.jpg';
import ModalVideo from 'react-modal-video';
import Disneymovies from './Disneymovies';
import Ursula from '../assets/images/Ursula.jpg';
import Captainhook from '../assets/images/captainhook.jpg';





export default class Villainscharecter extends Component {

  state ={displayMore:false};
  toggleDisplayMore =() =>{
          this.setState({displayMore: !this.state.displayMore});
      }

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
                       <div>Jafar is the main antagonist of Disney's 1992 animated feature film Aladdin. As Royal Vizier of Agrabah, he was presented as the Sultan's most trusted and loyal advisor. </div>
                       {
                      this.state.displayMore?(
                      <div>
                       In truth, the imperious Jafar held passionate disdain for the Sultan and dedicated the latter half of his life to gaining ownership of a magic lamp containing an all-powerful genie—to that end, Jafar would control cosmic power, which he would use to overtake the throne and the world at large.
                       Jafar is loosely based off the wicked sorcerer and vizier from the Aladdin folk tale in the One Thousand and One Nights collection of stories. With an elegant, yet cheeky approach to villainy, coupled with a dry sense of humor and menace, Jafar is amongst Disney's most renowned villains, and would later feature as a primary member of the Disney Villains franchise
                       <br/>
                       <button onClick={this.toggleDisplayMore}>Show Less</button>
                       </div>
                        ) :(
                       <div>
                       <button onClick={this.toggleDisplayMore}>Read More</button>
                       </div>
                       )
                       }
                       </Card.Text>
                    
                    </Card.Body>
                    <Button variant="primary" href="https://en.wikipedia.org/wiki/Jafar_(Disney)" target="_blank">More Details</Button>
                    <br/>
                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='eGD2m-nnyL4' onClose={() => this.setState({isOpen: false})} />
                    <Button variant="primary"  onClick={this.openModal} >Play Song</Button>
                 </Card>
                <Card text="white">
                    <Card.Img className="fiximg" variant="top" src={Scar} />
                    <Card.Body outline color="primary" className="cards" >
                      <Card.Title className="title">SCAR</Card.Title>
                      <Card.Text>
                        <div>Scar is the main antagonist of Disney's 1994 animated feature film, The Lion King. As the younger brother of Mufasa and second-born prince of the Pride Lands, Scar was next in line to assume the throne as king. </div>
                       {
                       this.state.displayMore?(
                       <div>
                       His chances were lost, however, at the birth of his nephew Simba. This embittered Scar with jealousy and a sense of entitlement, prompting him to develop a regicidal plot to take over the kingdom, with the aid of his hyena henchmen.
                       As one of Disney's most infamous villains—made especially notorious for his success in murdering Mufasa—Scar is a primary member of the Disney Villains franchise
                       <br/>
                       <button onClick={this.toggleDisplayMore}>Show Less</button>
                       </div>
                      ) :(
                       <div>
                       <button onClick={this.toggleDisplayMore}>Read More</button>
                       </div>
                       )
                       }
                     </Card.Text>
                  </Card.Body>
                  <Button variant="primary" href="https://en.wikipedia.org/wiki/Scar_(The_Lion_King)" target="_blank">More Details</Button>
                  <br/>
                  <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='zPUe7O3ODHQ' onClose={() => this.setState({isOpen: false})} />
              <Button variant="primary"  onClick={this.openModal} >Play Song</Button>
              </Card>
              <Card text="white">
                 <Card.Img className="fiximg" variant="top" src={Maleficent} />
                 <Card.Body className="cards" >
                 <Card.Title className="title">MALEFICENT</Card.Title>
                 <Card.Text>
                   <div>
                   Maleficent is an evil fairy and the main antagonist of Disney's 1959 animated feature film, Sleeping Beauty. Maleficent is an incarnation of pure evil, and responsible for all misfortune in King Stefan's kingdom.</div>
                   {
                this.state.displayMore?(
                <div>
                    She takes offense at not being invited to the christening of Princess Aurora and attempts revenge on King Stefan and Queen Leah by cursing the princess. She appears to be particularly disdainful of the three good fairies Flora, Fauna, and Merryweather, her polar opposites, who do all in their power to keep Maleficent's overwhelming evil magic at bay. She is frequently accompanied by her pet raven Diablo.
                   With her dark, elegant design, dramatic and flamboyant animation, and unlimited arsenal of magic powers at her command, Maleficent is one of the most popular and recognizable Disney Villains, in addition to being one of the primary members of the official franchise
                   <br/>
                       <button onClick={this.toggleDisplayMore}>Show Less</button>
                </div>
            ) :(
                <div>
                    <button onClick={this.toggleDisplayMore}>Read More</button>
                </div>
            )
            }
                 </Card.Text>
               </Card.Body> 
               <Button variant="primary" href="https://en.wikipedia.org/wiki/Maleficent" target="_blank">More Details</Button>
               <br/>
               <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='OCjn4qoYmD0' onClose={() => this.setState({isOpen: false})} />
               <Button variant="primary"  onClick={this.openModal} >Play Song</Button>
              </Card>
             </CardDeck>

{/* -----------------coming soon-------------------------------------------------------- */}
<br/>
               <CardDeck>
               <Card text="white">
    <Card.Img className="fiximg" variant="top" src={Mothergoal} />
    <Card.Body className="cards" >
      <Card.Title className="title">MOTHER GOTHEL</Card.Title>
      <Card.Text>
        <div>
      Mother Gothel is the main antagonist of Disney's 2010 animated feature film, Tangled. She is a wicked crone who retained youth for hundreds of years through the healing properties of a magic, golden flower.</div>
      {
                this.state.displayMore?(
                <div>
       When the flower's powers are transferred to the hair of Rapunzel, Gothel kidnapped the princess and locked her away in a secluded tower, where she hoarded Rapunzel's healing magic. To keep the princess under her control, Gothel posed as Rapunzel's loving, albeit overprotective mother with a mission to protect her daughter from the “cruelty” of the outside world.
       <br/>
                       <button onClick={this.toggleDisplayMore}>Show Less</button>
                </div>
            ) :(
                <div>
                    <button onClick={this.toggleDisplayMore}>Read More</button>
                </div>
            )
            }
      </Card.Text>
    </Card.Body>
    <Button variant="primary">More Detailss</Button>
    <br/>
    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='vRWzDWkgbTo' onClose={() => this.setState({isOpen: false})} />
               <Button variant="primary"  onClick={this.openModal} >Play Song</Button>
  </Card>
  <Card text="white">
    <Card.Img className="fiximg" variant="top" src={Ursula} />
    <Card.Body className="cards" >
    <Card.Title className="title">Ursula</Card.Title>
      <Card.Text>
        <div>
      Ursula is the main antagonist of Disney's 1989 animated feature film, The Little Mermaid. She is a villainous cecaelia sea witch. </div>
      {
                this.state.displayMore?(
                <div>
      After being banished from Atlantica by her longstanding rival, King Triton, a scorned Ursula vowed to exact vengeance by harnessing the power of the king's trident and installing herself as ruler of all the ocean.
       To accomplish her goals, Ursula strikes deals with unfortunate merfolk that will (supposedly) make their dreams come true, but are covertly designed to advance Ursula's own ambitions. Princess Ariel, being one such merfolk, trades her voice to Ursula in exchange for human legs. Should Ariel fail to uphold her end of the deal by winning the love of Prince Eric, she will be bound to Ursula, and thusly used as a bargaining chip for Triton's crown.
        Modeled after drag queens and theatrical personalities of the like, Ursula's fervent confidence and flamboyance have made her one of the most popular and influential of all the Disney Villains. She remains one of the franchise's primary members in the years following her debut
        <br/>
                       <button onClick={this.toggleDisplayMore}>Show Less</button>
                </div>
            ) :(
                <div>
                    <button onClick={this.toggleDisplayMore}>Read More</button>
                </div>
            )
            }
      </Card.Text>
      </Card.Body> 
               <Button variant="primary" href="https://en.wikipedia.org/wiki/Ursula_(The_Little_Mermaid)" target="_blank">More Details</Button>
               <br/>
               <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='xfkkMHieqcI' onClose={() => this.setState({isOpen: false})} />
               <Button variant="primary"  onClick={this.openModal} >Play Song</Button>
              </Card>
  <Card text="white">
  <Card.Img className="fiximg" variant="top" src={Captainhook} />
    <Card.Body className="cards" >
      <Card.Title className="title">Captain Hook</Card.Title>
      <Card.Text>
        <div>
      Captain Hook is the main antagonist of Disney's 1953 animated feature film, Peter Pan. He is the bloodthirsty commander of the Jolly Roger, and the scourge of Neverland.</div>
      {
                this.state.displayMore?(
                <div>
       Hook has long since abandoned sailing the high seas in favor of having revenge on Peter Pan for cutting off his left hand and feeding it to a crocodile, who has since been in constant pursuit of the captain. While a worthy opponent for Peter, Hook is destined to fail, sometimes because of Peter Pan's ability to fly, but more often through the bumbling actions of his first mate, Mr. Smee, who while unquestioningly faithful to the captain, is incompetent and flimsy.
      Hook's frustrations are understandable; he lost a hand to his opponent, is constantly pursued by the crocodile and cannot fly. These factors arguably make him one of the most sympathetic Disney Villains. His antics with the Crocodile are considered by many to be the funniest animated scenes ever created by Disney according to Frank Thomas and Ollie Johnston in the book The Disney Villain. As one of the most recognizable and popular villains in Disney's animated library, Captain Hook is also a primary member of the Disney Villains franchise.
      <br/>
                       <button onClick={this.toggleDisplayMore}>Show Less</button>
                </div>
            ) :(
                <div>
                    <button onClick={this.toggleDisplayMore}>Read More</button>
                </div>
            )
            }
      </Card.Text>
      </Card.Body> 
               <Button variant="primary" href="https://en.wikipedia.org/wiki/Captain_Hook" target="_blank">More Details</Button>
               <br/>
               <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='pBFy2fQpHzg' onClose={() => this.setState({isOpen: false})} />
               <Button variant="primary"  onClick={this.openModal} >Play Song</Button>
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
