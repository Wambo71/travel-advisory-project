import React, { useEffect, useState } from 'react';

const UserNote = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("url") 
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((error) => console.error("Error fetching notes:", error))
  }, [])

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.name}</h3>
          <p>{note.country}</p>
        </div>
      ))}
    </div>
  );
};

export default UserNote;
