import React, {Component} from 'react'
import FilmRow from "./FilmRow";

export default class Filmlist extends Component {
    
    state={
        filter:'all'  
    }
    
    render(){
    let object = ""
    if(this.state.filter === 'all'){
        object = this.props.films
    }

    let filmRow = object.map(element =>{
        return <FilmRow
            item={element} id={element.id} 
            detailsClick={this.props.detailsClick}
        />
    })
    return (
            <div className="film-list">  
                {filmRow}
            </div>
        )
    }
}