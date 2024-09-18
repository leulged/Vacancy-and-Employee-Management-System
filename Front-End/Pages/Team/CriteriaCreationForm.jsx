import React, {useState} from "react";
import axios from "axios";

function CriteriaCreationForm() {
  const [values, setValues] = useState({
    title: '',
    description:'',
    educational_level:'',
    experience: '',
    required_employee: '',
    gender: '',
    
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form values:", values); 
    axios.post('http://localhost:3001/api/job-posts', values)
    .then(result => {
      console.log(result);
      // Clear the form fields by resetting the state to the initial empty values
      setValues({
        title: '',
    description:'',
    educational_level:'',
    experience: '',
    required_employee: '',
    gender: ''
      });
    })
    .catch(err => {
      console.error('Error saving data:', err);
    });
};

  return (
    <div className="border-gray-200 rounded-3xl p-1 m-4 mx-auto max-w-4xl">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold shadow text-center mb-4 ">Create Criteria for Job</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-2">
            <label className="block text-base mb-2 text-left text-gray-700">
              Title:
            </label>
            <input
              type="text"
              name="title"
              value={values.title}
              onChange={(event) =>
                setValues({ ...values, title: event.target.value })
              }
              placeholder="Job Title"
              required
              className="w-full px-3 py-1 border rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-base mb-2 text-left text-gray-700">
              Description:
            </label>
            <textarea
              name="description"
              value={values.description}
              onChange={(event) =>
                setValues({ ...values, description: event.target.value })
              }
              placeholder="Description"
              required
              className="w-full px-3 py-2 border rounded h-28"
            ></textarea>
          </div>
          <div className="mb-2">
            <label className="block text-base mb-2 text-left text-gray-700">
              Education Level:
            </label>
            <select
              name="educational_level"
              value={values.educational_level}
              onChange={(event) =>
                setValues({ ...values, educational_level: event.target.value })
              }
              required
              className="w-full px-3 py-1 border rounded"
            >
              <option value="">Select</option>
              <option value="certificate">Certificate</option>
              <option value="degree">Degree</option>
              <option value="msc">MSc</option>
              <option value="phd">PhD</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="block text-base mb-2 text-left text-gray-700">
              Experience (in years):
            </label>
            <select
              name="experience"
              value={values.experience}
              onChange={(event) =>
                setValues({ ...values, experience: event.target.value })
              }
              className="w-full px-3 py-1 border rounded"
            >
              <option value="">None</option>
              {[...Array(5).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            <label className="block text-base mb-2 text-left text-gray-700">
              Required Employees:
            </label>
            <select
              name="required_employee"
              value={values.required_employee}
              onChange={(event) =>
                setValues({ ...values, required_employee: event.target.value })
              }
              className="w-full px-3 py-1 border rounded"
            >
              {[...Array(100).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            <label className="block text-base mb-2 text-left text-gray-700">
              Gender:
            </label>
            <select
              name="gender"
              value={values.gender}
              onChange={(event) =>
                setValues({ ...values, gender: event.target.value })
              }
              required
              className="w-full px-3 py-1 border rounded"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="both">Both</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="w-1/3 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CriteriaCreationForm;
