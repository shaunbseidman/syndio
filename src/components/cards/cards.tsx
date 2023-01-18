import React from 'react';
import './cards.scss';
import { GroupValues } from '../../interfaces/values.enum';
import { CardData } from '../../interfaces/card-data';

const Cards: React.FC<CardData> = ({
  cardData
}) => {
  return (
    <div>
      {cardData.map((item: any) => (
        item.label === GroupValues.PAY ? (
          <div 
            key={item.label} 
            className='card-item'
          >
            <h5
              className='card-item-title'
              aria-label={item.label}
            >
              {item.label}
            </h5>
            <p 
              className='card-item-content'
              aria-label={`${item.data.minority.label} earn ${item.data.minority.value} for every ${item.data.majority.value} by ${item.data.majority.label}`}
            >
              {item.data.minority.label} earn <strong>{item.data.minority.value}</strong> for every <strong>{item.data.majority.value}</strong> by {item.data.majority.label}
            </p>
          </div>
        ) : 
        item.label === GroupValues.EMP ? (
          <div 
            key={item.label} 
            className='card-item'
          >
            <h5
              className='card-item-title'
              aria-label={item.label}
            >
              {item.label}
            </h5>
            <p
              className='card-item-content'
              aria-label={`${item.data.label} make up ${item.data.value} of employees`}
            >
              {item.data.label} make up <strong>{item.data.value}</strong> of employees
            </p>
          </div>
        ) : 
        item.label === GroupValues.BUD ? (
          <div 
            key={item.label} 
            className='card-item'
          >
            <h5
              className='card-item-title'
              aria-label={item.label}
            >
              {item.label}
            </h5>
            <p 
              className='card-item-content'
              aria-label={`${item.data.value} minimum recommended budget to reduce pay equity gap`}
            >
              <strong>{item.data.value}</strong> minimum recommended budget to reduce pay equity gap
            </p>
          </div>
        ) : null
      ))}
    </div>
  );
}

export default Cards;