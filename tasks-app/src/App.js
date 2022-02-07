import React from 'react';

import AddTask from './components/AddTask/AddTask';
import Tasks from './components/Tasks/Tasks';

import './App.scss';

const App = () => {
  return (
    <div>
      <AddTask />
      <Tasks />
    </div>
  )
}

export default App;
