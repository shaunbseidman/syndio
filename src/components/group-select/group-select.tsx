import React, {useState, useEffect, useRef} from 'react';
import classNames from 'classnames';
import './group-select.scss';
import chevron from '../../assets/chevron.svg'
import { GroupInterface } from '../../interfaces/group';
import { GroupValues } from '../../interfaces/values.enum';

type GroupChangeFunction = (label: string) => void;

export interface props { 
  onGroupChange: GroupChangeFunction;
}

const GroupSelect: React.FC<props> = ({
  onGroupChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pickedGroup, setPickedGroup] = useState('Choose a group');
  const [defaultGroup, setDefaultGroup] = useState('');
  const [endpointData, setEndpointData] = useState([]);
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = (event: any) => {
    if (ref.current && ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    fetch('https://run.mocky.io/v3/9e343425-c47c-4c7f-a1ac-972c099be0ed')
      .then(response => response.json())
      .then(data => {
        setEndpointData(data);
        setDefaultGroup(data.map((item: GroupInterface) => item.label));
      });
  }, []);

  return (
    <div>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className='drop-down'
      >
        <div className='drop-down-wrapper'>
          <div 
            className='drop-down-selection'
            aria-label={pickedGroup}
          >
            {pickedGroup === GroupValues.GBF ? GroupValues.G1 : pickedGroup === GroupValues.GBR ? GroupValues.G2 : 'Choose a group'}
          </div>
          <img
            className="drop-down-chevron"
            src={chevron}
            alt='chevron'
          />
        </div>
      </div>
      {isOpen && (
        <ul 
          ref={ref}
          className='drop-down-container'
        >
          <li className='drop-down-item default'>Change Group</li>
          {endpointData.map((item: GroupInterface) => (
            <li 
              key={item.id}
              aria-label={item.label}
              className={classNames('drop-down-item', { 'active': item.label === pickedGroup, 'inactive': item.label !== pickedGroup })}              
              onClick={() => {
                setPickedGroup(item.label);
                setIsOpen(false);
                onGroupChange(item.label); 
              }}
            >
              {item.label === GroupValues.GBF ? GroupValues.G1 : item.label === GroupValues.GBR ? GroupValues.G2 : null}
            </li>
          ))}
        </ul>
      )}
    </div>  
  )
}

export default GroupSelect;