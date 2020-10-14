import React from "react";
import './QuoteCard.css';
import PropTypes from 'prop-types';

function QuoteCard (props){
    return (
        <figure className="QuoteCard">
            <img 
            src={props.image}
            alt="" className= "picture"/>
            
            <blockquote>
                {props.quote}
            </blockquote>
            <cite>{props.firstName + ' ' + props.lastName}</cite>
        </figure>
    )
}
QuoteCard.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  };
export default QuoteCard;