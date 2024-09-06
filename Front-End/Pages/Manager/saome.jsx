
import React, { useState } from "react";
import AddEmploye from "./Employe/AddEmploye.jsx";
import EditEmploye from "./Employe/EditEmploye.jsx";
import axios from "axios";

function Employee() {
  const [values, setValues] = useState({})
  const [showAddPopup, setShowAddPopup] = useState(false); // State to manage AddEmploye popup visibility
  const [showEditPopup, setShowEditPopup] = useState(false); // State to manage EditEmploye popup visibility
  const [currentEmployee, setCurrentEmployee] = useState(null); // State to hold the current employee being edited

  const employees = [
    {
      fullName: "",
      email: "",
      password: "",
      address: "",
      phoneNumber: "",
      category: "",
    }
    //   {
    //     fullName: "Jane Smith",
    //     email: "jane.smith@example.com",
    //     password: "password456",
    //     address: "456 Elm St, Othertown, USA",
    //     phoneNumber: "987-654-3210",
    //     category: "Marketing",
    //   },
  ];

  // // Filter out employees with empty fields
  // const filteredEmployees = employees.filter(
  //   (employee) => employee.fullName && employee.email
  // );

  // Function to handle edit button click
  const handleEditClick = (employee) => {
    setCurrentEmployee(employee);
    setShowEditPopup(true);
  };

  axios.get('http://localhost:3001/api/users', values)
    .then(result => {
      console.log(result);
    });
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 mt-5 shadow ">Employee Information</h1>
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
        <table className="w-auto justify-center mx-10  bg-white border border-gray-800">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Full Name</th>
              <th className="py-2 px-4 border-b">User Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Password</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          {/* <tbody> */}
            {/* {filteredEmployees.map((employee, index) => ( */}
              {/* // <tr key={index} className="text-center"> */}
                {/* <td className="py-2 px-4 border-b">{employee.fullName}</td> */}
                {/* <td className="py-2 px-4 border-b">{employee.email}</td> */}
                {/* <td className="py-2 px-4 border-b">{employee.password}</td> */}
                {/* <td className="py-2 px-4 border-b">{employee.address}</td> */}
                {/* {/* <td className="py-2 px-4 border-b">{employee.phoneNumber}</td> */}
                {/* // <td className="py-2 px-4 border-b">{employee.category}</td> */} 
                {/* <td className="py-2 px-4 border-b"> */}
                  {/* <button */}
                    {/* // type="button" */}
                    {/* // onClick={() => handleEditClick(employee)} // Show EditEmploye popup on button click */}
                    {/* // className="bg-blue-500 mr-2 text-white rounded px-2 hover:bg-blue-600" */}
                  {/* // > */}
                    {/* Edit */}
                  {/* </button> */}
                  {/* <button className="bg-red-800 mr-2 text-white rounded px-2 hover:bg-red-500"> */}
                    {/* Delete */}
                  {/* </button> */}
                {/* </td> */}
              {/* </tr> */}
            {/* // ))} */}
          {/* </tbody> */}
        </table>
      </div>
    </div>
  );
}

export default Employee;