import React from 'react';
import Cards from "./Cards"
import Details from './Details';
function createCards(cardsTerms) {
    return (
      <Cards
        key={cardsTerms.id}
        emoji={cardsTerms.emoji}
        title={cardsTerms.title}
        text={cardsTerms.text}
        p={cardsTerms.p}
        img2={cardsTerms.img2}
        name={cardsTerms.name}
      />
    );
  }
export default function LeftPannel(props) {
     
  return (
    <div>{Details.map(createCards)}</div>
   

  )
}

