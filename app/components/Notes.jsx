import React from 'react';
import Note from './Note.jsx';

// Array `notes` and Function `onEdit` are received from props
// As current onEdit hook, we execute current `onEdit` applied to node.id
export default ({notes, onEdit}) => {
  return (
    <ul className="notes">{notes.map((note) => {
        return (
          <li className="note" key={note.id}>
            <Note
              task={note.task}
              onEdit={onEdit.bind(null, note.id)} />
          </li>
        );
      })}
    </ul>
  );
}
