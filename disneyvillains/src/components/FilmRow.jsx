import React from 'react'
import FilmPoster from './FilmPoster'

const FilmRow = (props) => {
  const API_KEY ="https://image.tmdb.org/t/p/w500/"
  let handleDetailsClick =(film)=>{
    console.log('Fetching details for and the film title: ' + film)  
  }
  return (
    <div className="film-row" onClick={() => props.detailsClick(props.item)}>
      <img className="imagevillain" src={props.item.imagesvillain} />
      <div className="film-summary">
        <h1>{props.item.title}</h1>
      </div>
    </div> 
  )
}
export default FilmRow
