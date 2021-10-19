import React from 'react';
import './App.css';
import Header from 'sections/Header';
import Intro from 'sections/Intro';

const menuFields = [
  {
    id: '1',
    title: 'title',
    url: 'url',
  },
  {
    id: '2',
    title: 'title',
    url: 'url',
  },
  {
    id: '3',
    title: 'title',
    url: 'url',
  },
  {
    id: '4',
    title: 'title',
    url: 'url',
  },
];

function App() {
  return (
    <div className="App">
      <Header menu={menuFields} />
      <Intro />
    </div>
  );
}

export default App;
