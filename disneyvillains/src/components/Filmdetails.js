import React, {Component} from 'react'


export default class Filmdetails extends Component {

    render(){
        const backdropUrl = `https://image.tmdb.org/t/p/w1280/${this.props.film.backdrop_path}`
        const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
        
        let details = this.props.film.id > 0  ?
            <div className="film-detail is-hydrated">
                <figure className="film-backdrop">
                    <img src={backdropUrl} alt="" />
                    <h1 className="film-title">{this.props.film.title}</h1>
                </figure>
                <div className="film-meta">
                    <h2 className="film-tagline">{this.props.film.tagline}</h2>
                    <p className="film-detail-overview">
                       <img src={posterUrl} className="film-detail-poster" alt={this.props.film.title} />
                       {this.props.film.overview}
                    </p>
                </div>
            </div>
            :
            <div className="film-detail">
                <p>
                    <h1 className="material-icons">Movie Details</h1>
                    <h2>Select the Villain to Show his Movie</h2>
                </p>
            </div>

        return (
            <div className="film-details">
                {details} 
                  
            </div>
        )
    }  
}