import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

function CountryList() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/userNotes')
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching user notes:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading notes...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {notes.map((note) => (
        <CountryCard key={note.id} note={note} />
      ))}
    </div>
  );
}

export default CountryList;