import React from 'react';
import Cards from '../cards/cards';
import './card-grid.scss'

export interface props { gender: any, id: any}

const CardGrid: React.FC<props> = ({
  gender, id
}) => {
  const dataArray = Object.values(gender).map(item => [item]);
  return (
    <div className='card-grid'>
      {dataArray.map((item, index) => (
        <div 
          key={index}
          className='card-grid-wrapper'
        >
          <Cards
            items={item}
          />
        </div>
      ))}
    </div>
  );

}

export default CardGrid;