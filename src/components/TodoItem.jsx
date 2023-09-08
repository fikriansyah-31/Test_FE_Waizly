// TodoItem.js
import React, { useState } from 'react';

const TodoItem = (props) => {
  const { id, item, completed, onDelete } = props;
  const [isEditing, setEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    completed(id, editedItem);
    setEditing(false);
  };

  return (
    <div className='todo-item'>
      {isEditing ? (
        <>
          <input
            type='text'
            value={editedItem}
            onChange={(e) => setEditedItem(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <input type='checkbox' onChange={() => completed(id)} />
          <p className='ml-1'>{item}</p>
          <button className='button' onClick={handleEdit}>Edit</button>
          <button className='button' onClick={() => onDelete(id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
