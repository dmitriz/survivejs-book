import React from 'react';
import Note from './Note.jsx';

// Array `notes` is received from props
export default ({notes}) => {
  return (
    <ul className="notes">{notes.map((note) => {
      return (
        <li className="note" key={note.id}>
          <Note task={note.task} />
        </li>
      );
    })}
    </ul>
  );
}
