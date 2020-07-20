import React from 'react';
import Card from './Card';
import "./List.css";

function List(props)
    {
        let cards = props.cardIds.map(function(card){
            return <Card title={props.allCards[card].title} content={props.allCards[card].content}/>
        });

    return (<section class="List">
        <header class="List-header">
            <h2>{props.header}</h2>
    </header><div class="List-cards">{cards}<button type="button" class="List-add-button">
              + Add Random Card
            </button></div></section>)
    }


export default List;
