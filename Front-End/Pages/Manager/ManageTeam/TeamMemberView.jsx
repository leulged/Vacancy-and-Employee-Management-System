import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EditTeam from './EditTeam';

function TeamMemberView() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showEditPopup, setShowEditPopup] = useState(false); // State to manage EditEmploye popup visibility
    const [currentEmployee, setCurrentEmployee] = useState(null); // State to hold the current employee being edited

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/team-memberships');
                console.log(response.data); // Log the data to see what is returned
                setEmployees(response.data);
            } catch (err) {
                console.error(err); // Log the error to the console
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    const handleEditClick = (employee) => {
        setCurrentEmployee(employee);
        setShowEditPopup(true);
    };

    if (loading) return <p>Loading...</p>; // Show a loading message while data is being fetched
    if (error) return <p>Error: {error}</p>; // Show an error message if something goes wrong

    return (
        <div>
            {showEditPopup && (
                <div className="fixed inset-0 flex items-center justify-center min-w-[650px] bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
                        <EditTeam employee={currentEmployee} /> {/* Pass the current employee to EditEmploye */}
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
                            <th className="py-2 px-4 border-b">Password</th>
                            <th className="py-2 px-4 border-b">Role</th>
                            <th className="py-2 px-4 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <tr key={index} className="text-center">
                                <td className="py-2 px-4 border-b">{employee.user.full_name}</td>
                                <td className="py-2 px-4 border-b">{employee.user.username}</td>
                                <td className="py-2 px-4 border-b">{employee.user.email}</td>
                                <td className="py-2 px-4 border-b">{employee.user.password}</td>
                                <td className="py-2 px-4 border-b">{employee.user.role.name}</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        type="button"
                                        onClick={() => handleEditClick(employee)}
                                        className="bg-blue-500 mr-2 text-white rounded px-2 hover:bg-blue-600"
                                    >
                                        Edit
                                    </button>
                                    <button
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
export default TeamMemberView;