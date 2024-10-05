import React, { useState, useEffect } from "react";
import AddTeam from "./ManageTeam/AddTeam";
import axios from "axios";
import { Link } from "react-router-dom";


function ManageTeam() {
  const [teams, setTeams] = useState([]);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/teams'); 
        setTeams(response.data); // Update state with the fetched data
      } catch (err) {
        setError(err.message); // Set error message if something goes wrong
      } finally {
        setLoading(false); // Set loading to false after fetching is complete
      }
    };

    fetchTeams();
  }, []);

  if (loading) return <p>Loading...</p>; 
  if (error) return <p>Error: {error}</p>;

  function deleteTeam(id) {
    axios
      .delete(`http://localhost:3001/api/teams/${id}`)
      .then(() => {
        alert('Team has been deleted');
        setTeams((prevTeams) => prevTeams.filter((team) => team.id !== id)); // Remove the deleted team from state
      })
      .catch((err) => {
        alert(`Error deleting team: ${err.message}`); 
      });
  }
  return (
    <div className="ml-24 mt-11">
      <div className="flex justify-start ml-10 mb-4">
        <button
          type="button"
          onClick={() => setShowAddPopup(true)}
          className="mt-4 mb-4 w-200 py-2 px-8 bg-green-700 text-white rounded hover:bg-blue-600"
        >
          Add Team
        </button>
      </div>
      {/* Render AddEmploye component as a popup */}
      {showAddPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg min-w-[500px] shadow-lg w-1/2">
            <AddTeam />
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowAddPopup(false)} // Close popup on button click
                className="w-1/4 py-2 bg-red-700 text-white rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="">
        <table className="w-auto justify-center mx-10  bg-white border border-gray-800">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Team Name</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((Team, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border-b">{Team.team_name}</td>
                <td className="py-2 px-4 border-b">
                  <Link 
                   to="/TeamMember"
                  className="bg-blue-500 mr-2 text-white rounded px-2 hover:bg-blue-600">
                    View
                  </Link>

                  <button 
                  onClick={() => deleteTeam(Team.id)}
                  className="bg-red-800 mr-2 text-white rounded px-2 hover:bg-red-500">
                    Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageTeam;