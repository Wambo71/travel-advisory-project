import React, { useState } from 'react';

const API_URL = "http://localhost:3000/userNotes";

const TravelNoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    note: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (!response.ok) {
          alert("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        
        setFormData({ name: "", country: "", note: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        value={formData.name}
        name="name"
        onChange={handleChange}
        placeholder="Enter name"
      />
      <br />
      <label htmlFor="country">Country:</label>
      <input
        type="text"
        value={formData.country}
        name="country"
        onChange={handleChange}
        placeholder="Enter country"
      />
      <br />
      <label htmlFor="note">Travel Note:</label>
      <input
        type="text"
        value={formData.note}
        name="note"
        onChange={handleChange}
        placeholder="Enter note"
      />
      <br />
      <button type="submit">Submit Note</button>
    </form>
  );
};

export default TravelNoteForm;
