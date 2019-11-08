import React from 'react'

const FilmPoster = (props) => {
    return (
        <div>
              <img src= {props.posterUrl}  alt="filmposter" />
        </div>
    )
}

export default FilmPoster
