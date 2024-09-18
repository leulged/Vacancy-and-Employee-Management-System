<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function CriteriaView() {
  const [criteria, setCriteria] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(null); // State to track the expanded criteria
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchCriteria = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/job-posts'); // Replace with your API URL
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

  const handleAcceptedClick = (Criteria) => {
    // Navigate to /viewpost and pass the selected Criteria as state
    navigate("/View-Post", { state: { Criteria } });
  };

  return (
    <div className="flex flex-wrap">
      {criteria.map((Criteria, index) => (
        <div key={index} className="border w-auto min-w-56 mx-5 p-3 max-w-xs break-words">
          <p>Title: {Criteria.title}</p>
          <p>Education Level: {Criteria.educational_level}</p>
          <p>Experience (in years): {Criteria.experience}</p>
          <p>Required Employee: {Criteria.required_employee}</p>
          <p>Gender: {Criteria.gender}</p>

          {/* Conditionally render description */}
          {expanded === index && (
            <p className="break-words max-w-xs">Description: {Criteria.description}</p>
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

          <div className="border p-2 shadow rounded mt-2">
            <button className="bg-red-500 mr-2 text-white rounded px-2 hover:bg-red-800">
              Declined
            </button>
            <button
              onClick={() => handleAcceptedClick(Criteria)} // Navigate on Accept
              className="bg-blue-500 mr-2 text-white rounded px-2 hover:bg-blue-700"
            >
              Accepted
            </button>
          </div>
        </div>
      ))}
=======
import React from "react";

function CriteriaView() {
  return (
    <div className="flex w-screen ">
      <div className="border rounded-xl w-auto min-w-56 mx-5 p-3">
        <p>Title: Mernstack Developer </p>
        <p>Education Level: Degree</p>
        <p>Profesional Skill(in years): 2</p>
        <p>Required Employee: 10</p>
        <div className="flex">
          <p>Gender: Both</p>
          <button className="mb-3 mt-1 ml-4 w-20 pb-1 px-5 bg-green-600 text-white rounded hover:bg-green-700 ">
            more
          </button>
        </div>
        <div className="border p-2 shadow rounded">
          <button className=" bg-red-500 mr-2 text-white rounded px-2 hover:bg-red-800">
            Declined
          </button>
          <button className="bg-blue-500 mr-2 text-white rounded px-2 hover:bg-blue-700 ">
            Accepted
          </button>
        </div>
      </div>
>>>>>>> b1165d3d (first commit)
    </div>
  );
}

export default CriteriaView;
