import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './card-tabs.scss'
import { GroupDataInterface } from '../../interfaces/group-data';
import CardGrid from '../card-grid/card-grid';
import { GroupValues } from '../../interfaces/values.enum';

interface props {
  label: string;
}

interface CardItem {
  id: string;
  label: string;
  data?: any;
}

const CardTabs: React.FC<props> = ({
  label
}) => {
  const [selectedTab, setSelectedTab] = useState('tab1');
  const [data, setData] = useState<GroupDataInterface[]>([]);
  
  function handleTabClick(tab: string):void {
    setSelectedTab(tab);
  }

  useEffect(() => {
    if (label === GroupValues.GBF) {
      fetch('https://run.mocky.io/v3/a9f6a4b7-d03c-4a45-b64b-791e054f36b8')
        .then(response => response.json())
        .then((data: GroupDataInterface) => {
          //this is ugly but in order to map each nested object onto the cards - need to turn it into array
          const dataArray = [{ ...data }];
          setData(dataArray);
        });

    } else if (label === GroupValues.GBR) {
      fetch('https://run.mocky.io/v3/f1b01b57-3147-476a-a632-0c10ad2a3c1a')
        .then(response => response.json())
        .then((data: GroupDataInterface) => {
          //this is ugly but in order to map each nested object onto the cards - need to turn it into array
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
          <h5
            className={classnames('card-tab-title', { 'active': selectedTab === 'tab1' })}
            aria-label='Gender'
          >
            Gender
          </h5>
        </div>
        <div
          className={classnames('card-tab', { 'active': selectedTab === 'tab2' })}
          onClick={() => handleTabClick('tab2')}
        >
          <h5
            className={classnames('card-tab-title', { 'active': selectedTab === 'tab2' })}
            aria-label='Race'
          >
            Race
          </h5>
        </div>
      </div>
      {selectedTab === 'tab1' && 
        <div
          className={classnames('card-content', { 'active': selectedTab === 'tab1' })}
        >
          {data.map((item: CardItem) => {
            return (
              <div
                key={item.id}
                className='card-content-grid'
              >
                <CardGrid
                  key={item.id}
                  groupByType={item.data.gender}
                />
              </div>
            )
          })}
        </div>
      }
      {selectedTab === 'tab2' && 
        <div
          className={classnames('card-content', { 'active': selectedTab === 'tab2' })}
        >
          {data.map((item: any) => {
            return (
              <div
                key={item.id}
                className='card-content-grid'
              >
                <CardGrid
                  key={item.id}
                  groupByType={item.data.race}
                />
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}
export default CardTabs;
