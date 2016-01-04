import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';


const notesArray = [
  {
    id: uuid.v4(),
    task: 'Learn Webpack'
  },
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Do laundry'
  }
];

// Main App Component
export default class App extends React.Component {
  render() {

	  // Pass notes data as prop 
    return (
      <div>
        <Notes notes={notesArray} />
      </div>
    );
  }
}