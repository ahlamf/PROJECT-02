import React, { Component } from 'react'
import '../App.css';
import Filmlist from "./Filmlist";
import Filmdetails from "./Filmdetails";
import TMDB from "../TMDB";
import axios from "axios";

export default class Disneymovies extends Component {
    constructor(){
        super()
      }

      state = {
        films: TMDB,
        current: {}
      }

      handleDetailsClick = (film)=>{
        const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    
        axios({
          method: 'GET',
          url: url
        }).then(response => {
          console.log(response) 
          console.log(`Fetching details for: ${film.title}`);
          this.setState({ current: response.data })
        })
      }

    render() {
        let imges = 'https://image.tmdb.org/t/p/w500/'
        return (
          <div className="Villainsmovies">
              <h2>Villians Movies</h2>
      <div className="film-library">
        <Filmlist detailsClick={this.handleDetailsClick}  films={this.state.films.films} filmsImg={imges}/>
        <Filmdetails film={this.state.current} filmsImg={imges}/>
      </div>
    </div>
        )
    }
}
