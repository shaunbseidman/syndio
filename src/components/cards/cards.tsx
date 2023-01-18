import React from 'react';
import './cards.scss';
export interface props { items: any }

const Cards: React.FC<props> = ({
  items
}) => {
  return (
    <div>
      {items.map((item: any) => (
        item.label === 'Pay Equity Gap' ? (
          <div key={item.label} className='fart'>
            <h5
              className='card-item-title'
              aria-label={item.label}
            >
              {item.label}
            </h5>
            <p className='card-item-content'>{item.data.minority.label} earn <strong>{item.data.minority.value}</strong> for every <strong>{item.data.majority.value}</strong> by {item.data.majority.label}</p>
          </div>
        ) : 
        item.label === 'Employees in Comparison' ? (
          <div key={item.label} className='fart'>
            <h5
              className='card-item-title'
              aria-label={item.label}
            >
              {item.label}
            </h5>
              {item.data.label} make up <strong>{item.data.value}</strong> of employees
          </div>
        ) : 
        item.label === 'Budget' ? (
          <div key={item.label} className='fart'>
            <h5
              className='card-item-title'
              aria-label={item.label}
            >
              {item.label}
            </h5>
              <strong>{item.data.value}</strong> minimum recommended budget to reduce pay equity gap
          </div>
        ) : null
      ))}
    </div>
  );

}

export default Cards;