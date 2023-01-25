import React from 'react'
import { CardsData } from '../../data/Data.js'
import Card from '../Card/Card.jsx'
import './Cards.css'
const Cards = () => {
  return (
    <div className="Cards">
        {CardsData.map((card,id)=>{
            return(
                <div className="parentContainer" key={id}>
                    <Card
                    title={card.title}
                    color={card.color}
                    barValue={card.barValue}
                    value={card.value}
                    png={card.png}
                    series={card.series}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards
