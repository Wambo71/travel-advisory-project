import React from 'react';

function CountryCard({ note }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-md mb-4">
      <h2 className="text-lg font-bold">{note.country}</h2>
      <p><strong>User:</strong> {note.name}</p>
      <p className="mt-2 text-gray-700">{note.note}</p>
    </div>
  );
}

export default CountryCard;
