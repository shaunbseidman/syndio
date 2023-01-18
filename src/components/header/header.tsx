import React from 'react';
import logo from '../../assets/syndio-logo.svg'
import './header.scss';
import GroupSelect from '../group-select/group-select';

export interface props {
  onGroupChange: any
}

const Header: React.FC<props> =({
  onGroupChange
}) => {
  return (
    <header className='header'>
      <div className='header-container'>
        <img 
          className='header-logo'
          src={logo}
          alt="syndio logo"
        />
        <GroupSelect onGroupChange={onGroupChange} />
      </div>
    </header>
  )
}

export default Header;