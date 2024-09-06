import React, { useState, useEffect } from "react";
import axios from "axios";

function History() {
  const [criteria, setCriteria] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(null); // State to track the expanded criteria

  useEffect(() => {
    const fetchCriteria = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/job-posts"); // Replace with your API URL
        setCriteria(response.data); // Update state with the fetched data
      } catch (err) {
        setError(err.message); // Set error message if something goes wrong
      } finally {
        setLoading(false); // Set loading to false after fetching is complete
      }
    };

    fetchCriteria();
  }, []);

  if (loading) return <p>Loading...</p>; // Show a loading message while data is being fetched
  if (error) return <p>Error: {error}</p>;

  const handleMoreClick = (index) => {
    // Toggle the expanded state, if already expanded, collapse it
    setExpanded(expanded === index ? null : index);
  };
  return (
    <div className="flex flex-wrap">
      {criteria.map((Criteria, index) => (
        <div
          key={index}
          className="border w-auto min-w-56 mx-5 p-3 max-w-xs break-words"
        >
          {" "}
          {/* max-w-xs ensures the width remains fixed */}
          <p>Title: {Criteria.title}</p>
          <p>Education Level: {Criteria.educational_level}</p>
          <p>Experience (in years): {Criteria.experience}</p>
          <p>Required Employee: {Criteria.required_employee}</p>
          <p>Gender: {Criteria.gender}</p>
          {/* Conditionally render description */}
          {expanded === index && (
            <p className="break-words">Description: {Criteria.description}</p>
          )}
          {/* "More" or "Less" button */}
          <div className="flex mt-2">
            <button
              onClick={() => handleMoreClick(index)}
              className="mb-3 mt-1 w-20 pb-1 px-5 bg-green-600 text-white rounded hover:bg-green-700"
            >
              {expanded === index ? "Less" : "More"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default History;
