import React, { useState } from 'react'
import axios from 'axios';

function AddTeam() {
  const [values, setValues] = useState({
    team_name: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("For teams: ", values);
    axios.post('http://localhost:3001/api/teams', values)
    .then(result => {
      console.log(result);
      setValues({
        team_name: '',
      });
    })
    .catch(err => {
      console.error('Error saving data:', err)
    });
  };
  return (
    <div>
    <div className="border border-gray-200 rounded-3xl p-4 m-4 w-1/2 mx-auto">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-5">Add Team</h2>
        <div className="mb-4">
          <label className="block text-base mb-2 text-left text-gray-700 ">
            Team Name:
          </label>
          <input
            type="text"
            name="teamname"
            value={values.team_name}
              onChange={(event) =>
                setValues({ ...values, team_name: event.target.value })
              }
            placeholder="Enter Team-Name"
            required
            className="w-full px-3 py-1 border rounded"
          />
        </div>
       
        <div className="flex justify-center mt-4">
        <button
          className="w-100px py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Team
        </button>
      </div>
      </form>
    </div>
  </div>
  )
}

export default AddTeam