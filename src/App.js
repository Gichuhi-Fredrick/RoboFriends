import React, { useState, useEffect } from 'react';
import 'tachyons';
import './App.css';
import Scroll from './components/Scroll';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [roboFreinds, setRoboFriends] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await fetch('https://jsonplaceholder.typicode.com/users');
      let data = await res.json();
      setRoboFriends(data);
      return data;
    }
    getData();
  }, []);

  function onInputChange(event) {
    setInputValue(event.target.value);
  }

  const filteredRobots = roboFreinds.filter((robot) => {
    return robot.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <>
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox onInputChange={onInputChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    </>
  );
}

export default App;
