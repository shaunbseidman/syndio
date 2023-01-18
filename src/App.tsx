import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/header';
import CardTabs from './components/card-tabs/card-tabs';

function App() {
  const [pickedGroup, setPickedGroup] = useState('');
  return (
    <div className="App">
      <Header onGroupChange={(label: string) => setPickedGroup(label)} />
      <CardTabs label={pickedGroup} />
    </div>
  );
}

export default App;
