import React from 'react';
import Cards from '../cards/cards';
import './card-grid.scss'
import { GroupInterface } from '../../interfaces/group';

export interface props { 
  groupByType: GroupInterface, 
}

const CardGrid: React.FC<props> = ({
  groupByType
}) => {
  const dataArray = Object.values(groupByType).map(item => [item]);
  return (
    <div className='card-grid'>
      {dataArray.map((item, index) => (
        <div 
          key={index}
          className='card-grid-wrapper'
        >
          <Cards cardData={item} />
        </div>
      ))}
    </div>
  );
}

export default CardGrid;