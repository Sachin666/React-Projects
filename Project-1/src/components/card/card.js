import { Component } from "react";
import './card.css'

class Card extends Component {
    render(){
        const {id, name, email, phone} = this.props.monster
        return(
            <div className="card-container" key={id}>
                <img src={`https://robohash.org/${id}?set=set2&size=200x200`} alt={`${name}`} />
                <h2>{name}</h2>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        )
    }
}

export default Card