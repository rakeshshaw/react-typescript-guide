import React from 'react';
import './App.css';
import EventComponent from './event-example/EventComponent';
import UserSearchClass from './state-example/class-based-components/UserSearchClass';
import GuestList from './state-example/GuestList';
// import UserSearch from './state-example/UserSearch';


const users = [
  { name: "Alex", age: 20 },
  { name: "Rohan", age: 20 },
  { name: "Rocky", age: 20 },
];

const App = () => {
  return (
    <div>
      <UserSearchClass users={users}/>
      {/* <GuestList /> */}
      {/* <UserSearchClass /> */}
      {/* <UserSearchClass /> */}
      {/* <EventComponent /> */}
    </div>
  );
};

export default App;
