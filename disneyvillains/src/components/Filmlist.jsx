import React, {Component} from 'react'
import FilmRow from "./FilmRow";

export default class Filmlist extends Component {
    
    state={
        filter:'all'  
    }
    
    render(){
    console.log(this.props)
    var url = this.props.filmsImg

    let object = ""
    if(this.state.filter === 'all'){
        object = this.props.films
    }

    let filmRow = object.map(element =>{
        return <FilmRow
            item={element} id={element.id} 
            detailsClick={this.props.detailsClick}
            urlP={url}
        />
    })
    
    return (
            <div className="film-list">
                
                {filmRow}
            </div>
        )
    }
}