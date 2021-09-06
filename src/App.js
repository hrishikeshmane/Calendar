import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Calendar from './Calendar';

function App() {
  // const page = useSelector(selectPage);

  return (
    <div className="app">
      <Sidebar />
      <Calendar />
    </div>
  );
}

export default App;
