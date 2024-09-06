import React, { useState, useEffect } from "react";
import axios from "axios";
import AddEmploye from "./Employe/AddEmploye.jsx";
import EditEmploye from "./Employe/EditEmploye.jsx";

function Employee() {
  const [employees, setEmployees] = useState([]); // State to hold the list of employees
  const [showAddPopup, setShowAddPopup] = useState(false); // State to manage AddEmploye popup visibility
  const [showEditPopup, setShowEditPopup] = useState(false); // State to manage EditEmploye popup visibility
  const [currentEmployee, setCurrentEmployee] = useState(null); // State to hold the current employee being edited
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  
  // Fetch employees data from the API
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/users'); // Replace with your API URL
        setEmployees(response.data); // Update state with the fetched data
      } catch (err) {
        setError(err.message); // Set error message if something goes wrong
      } finally {
        setLoading(false); // Set loading to false after fetching is complete
      }
    };
    fetchEmployees();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Function to handle edit button click
  const handleEditClick = (employee) => {
    setCurrentEmployee(employee);
    setShowEditPopup(true);
  };

  if (loading) return <p>Loading...</p>; // Show a loading message while data is being fetched
  if (error) return <p>Error: {error}</p>; // Show an error message if something goes wrong
  
  function deleteTeam(id) {
    axios
      .delete(`http://localhost:3001/api/users/${id}`)// Use template literals correctly
      .then(() => {
        alert('Employee has been deleted');
        setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id)); // Remove the deleted team from state
      })
      .catch((err) => {
        alert(`Error deleting team: ${err.message}`); // Handle error if deletion fails
      });
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 mt-5 shadow">Employee Information</h1>
      <div className="flex justify-start ml-10 mb-4">
        <button
          type="button"
          onClick={() => setShowAddPopup(true)} // Show AddEmploye popup on button click
          className="mt-4 mb-4 w-200 py-2 px-8 bg-green-700 text-white rounded hover:bg-blue-600"
        >
          Add Employee
        </button>
      </div>

      {/* Render AddEmploye component as a popup */}
      {showAddPopup && (
        <div className="fixed inset-0 flex items-center justify-center min-w-[650px] bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
            <AddEmploye />
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowAddPopup(false)} // Close popup on button click
                className="w-1/3 py-2 bg-red-700 text-white rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Render EditEmploye component as a popup */}
      {showEditPopup && (
        <div className="fixed inset-0 flex items-center justify-center min-w-[650px] bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
            <EditEmploye employee={currentEmployee} /> {/* Pass the current employee to EditEmploye */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowEditPopup(false)} // Close popup on button click
                className="w-1/3 py-2 bg-red-700 text-white rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="">
        <table className="w-auto justify-center mx-10 bg-white border border-gray-800">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Full Name</th>
              <th className="py-2 px-4 border-b">Username</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Team</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border-b">{employee.full_name}</td>
                <td className="py-2 px-4 border-b">{employee.username}</td>
                <td className="py-2 px-4 border-b">{employee.email}</td>
                {/* <td className="py-2 px-4 border-b">{employee.team}</td> */}
                <td className="py-2 px-4 border-b">
                  <button
                    type="button"
                    onClick={() => handleEditClick(employee)} // Show EditEmploye popup on button click
                    className="bg-blue-500 mr-2 text-white rounded px-2 hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button 
                  onClick={() => deleteTeam(employee.id)}
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

export default Employee;
