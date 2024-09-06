import React, { useState } from 'react';
import axios from 'axios';


function EditTeam() {
  const [values, setValues] = useState({
    full_name: '',
    username: '',
    email: '',
    password: '',
  });
  function UpdateEmployee(id) {
    axios
      .put(`http://localhost:3001/api/users/${id}`)// Use template literals correctly
      .then(() => {
        (result) => {
          console.log(result)}
        alert('Team has been updated');
        setValues((prevEmployee) => prevEmployee.filter((employee) => employee.id == id)); // Remove the deleted team from state
      })
      .catch((err) => {
        alert(`Error deleting team: ${err.message}`); // Handle error if deletion fails
      });
  }
  return (
    <div>
      <div className="border border-gray-200 rounded-3xl p-4 m-4 w-1/2 mx-auto">
        <form  onSubmit={UpdateEmployee}>
          <h2 className="text-2xl font-bold mb-5">Edit Employee</h2>
          <div className="mb-4">
            <label className="block text-base mb-2 text-left text-gray-700 ">
              Full Name:
            </label>
            <input
              type="text"
              name="full_name"
              value={values.full_name}
              onChange={(event) =>
                setValues({ ...values, full_name: event.target.value })}
              placeholder="Update Full-Name"
              required
              className="w-full px-3 py-1 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base mb-2 text-left text-gray-700 ">
              User Name:
            </label>
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={(event) =>
                setValues({ ...values, username: event.target.value })}
              placeholder="Update User-Name"
              required
              className="w-full px-3 py-1 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base mb-2 text-left text-gray-700">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={(event) =>
                setValues({ ...values, email: event.target.value })}
              placeholder="Update Email"
              required
              className="w-full px-3 py-1 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base mb-2 text-left text-gray-700 ">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={(event) =>
                setValues({ ...values, password: event.target.value })}
              placeholder="Enter Password"
              required
              className="w-full px-3 py-1 border rounded"
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-base mb-2 text-left text-gray-700">
              Role:
            </label>
            <select
              name="rolename"
              required
              className="w-full px-3 py-1 border rounded v "
            >IT</select>
          </div> */}
          <div className="flex justify-center mt-4">
            <button
              className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditTeam