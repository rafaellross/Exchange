import React, { Component } from "react";
import './Card.css';

class Card extends Component {
  render() {
  return (
      <div className="card">
          <div className="image">
            <img src={this.props.image}/>
          </div>
          <div className="title">
            <span>
              {this.props.title.slice(0, 100)}
            </span>              
          </div>
      </div>
    );
  }
}



export default Card;
