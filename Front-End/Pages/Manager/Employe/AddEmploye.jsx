import React, { useState, useEffect} from "react";
import axios from "axios";

function AddEmployee() {
  const [teams, setTeams] = useState([]);
  const [values, setValues] = useState({
    full_name: "",
    username: "",
    email: "",
    password: "",
    team: "",
    
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form values:", values);
    axios
      .post("http://localhost:3001/api/users", values)
      .then((result) => {
        console.log(result);
        // Clear the form fields by resetting the state to the initial empty values
        setValues({
          full_name: "",
          username: "",
          email: "",
          password: "",
          team: "",
        
        });
      })
      .catch((err) => {
        console.error("Error saving data:", err);
      });
    };

    useEffect(() => {
      const fetchTeams = async () => {
        try {
          const response = await axios.get("http://localhost:3001/api/teams"); 
          console.log(response.data);
          setTeams(response.data); // Assuming the response contains an array of team names
        } catch (error) {
          console.error("Error fetching teams:", error);
        }
      };
  
      fetchTeams();
    }, []);

  return (
    <div>
      <div className="border border-gray-200 rounded-3xl p-4 m-4 w-1/2 mx-auto">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-5">Add Employee</h2>
          <div className="mb-4">
            <label className="block text-base mb-2 text-left text-gray-700">
              Full Name:
            </label>
            <input
              type="text"
              name="full_name"
              value={values.full_name}
              onChange={(event) =>
                setValues({ ...values, full_name: event.target.value })
              }
              placeholder="Enter Full-Name"
              required
              className="w-full px-3 py-1 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base mb-2 text-left text-gray-700">
              User Name:
            </label>
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={(event) =>
                setValues({ ...values, username: event.target.value })
              }
              placeholder="Enter User-Name"
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
                setValues({ ...values, email: event.target.value })
              }
              placeholder="Enter Email"
              required
              className="w-full px-3 py-1 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base mb-2 text-left text-gray-700">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={(event) =>
                setValues({ ...values, password: event.target.value })
              }
              placeholder="Enter Password"
              required
              className="w-full px-3 py-1 border rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-base mb-2 text-left text-gray-700">
              Team:
            </label>
            <select
              name="team"
              value={values.team}
              onChange={(event) =>
                setValues({ ...values, team: event.target.value })
              }
              required
              className="w-full px-3 py-1 border rounded"
            >
              <option value="">Select</option>
              {teams.map((team) => (
                <option key={team.id} value={team.team_name}>
                  {team.team_name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 w-200 py-2 px-14 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
