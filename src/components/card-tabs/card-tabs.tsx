import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './card-tabs.scss'
import { GroupDataInterface } from '../../interfaces/group-data';
import CardGrid from '../card-grid/card-grid';

export interface props {label:any }

const CardTabs: React.FC<props> = ({
  label
}) => {
  const [selectedTab, setSelectedTab] = useState('tab1');
  const [data, setData] = useState<GroupDataInterface[]>([]);
  
  function handleTabClick(tab: any) {
    setSelectedTab(tab);
  }

  useEffect(() => {
    if (label === 'Group by Function') {
      fetch('https://run.mocky.io/v3/a9f6a4b7-d03c-4a45-b64b-791e054f36b8')
        .then(response => response.json())
        .then((data: GroupDataInterface) => {
          const dataArray = [{ ...data }];
          setData(dataArray);
        });

    } else if (label === 'Group by Role') {
      fetch('https://run.mocky.io/v3/f1b01b57-3147-476a-a632-0c10ad2a3c1a')
        .then(response => response.json())
        .then((data: GroupDataInterface) => {
          const dataArray = [{ ...data }];
          setData(dataArray);
        });
    }
  }, [label]);
  return (
    <div className='card-tabs'>
      <div className='card-tabs-wrapper'>
        <div
          className={classnames('card-tab', { 'active': selectedTab === 'tab1' })}
          onClick={() => handleTabClick('tab1')}
        >
          Gender
        </div>
        <div
          className={classnames('card-tab', { 'active': selectedTab === 'tab2' })}
          onClick={() => handleTabClick('tab2')}
        >
          Race
        </div>
      </div>
      {selectedTab === 'tab1' && 
        <div
          className={classnames('card-content', { 'active': selectedTab === 'tab1' })}
        >
          {data.map(item =>
            <div 
              key={item.id}
              className='card-content-grid'
            >
            <CardGrid
                key={item.id}
                id={item.id}
                gender={item.data.gender}
              />
            </div>
          )}
        </div>
      }
      {selectedTab === 'tab2' && 
        <div
          className={classnames('card-content', { 'active': selectedTab === 'tab2' })}
        >
          {data.map(item =>
            <div 
              key={item.id}
              className='card-content-grid'
            >
              <CardGrid
                key={item.id}
                id={item.id}
                gender={item.data.race}
              />
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default CardTabs;
