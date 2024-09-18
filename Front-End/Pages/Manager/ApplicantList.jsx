import React, { useEffect, useState } from "react";
import axios from "axios";

function ApplicantList() {
  const [applicantList, setapplicantList] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state


  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/applications'); // Replace with your API URL
        setapplicantList(response.data); // Update state with the fetched data
      } catch (err) {
        setError(err.message); // Set error message if something goes wrong
      } finally {
        setLoading(false); // Set loading to false after fetching is complete
      }
    };
    fetchApplicants();
  }, []);

  if (loading) return <p>Loading...</p>; // Show a loading message while data is being fetched
  if (error) return <p>Error: {error}</p>; // Show an error message if something goes wrong

  return (
    <div>
      <h1 className="text-2xl font-bold shadow text-center mb-4 mt-5">Applicant Information</h1>
      <div className="flex justify-start ml-10 mb-4"></div>
      <div className="">
        <table className="w-auto justify-center  bg-white border border-gray-800">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Full Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone Number</th>
              <th className="py-2 px-4 border-b">Resume_url</th>
              <th className="py-2 px-4 border-b">Education</th>
              <th className="py-2 px-4 border-b">Experience</th>
              <th className="py-2 px-4 border-b">Skills</th>
              <th className="py-2 px-4 border-b">Gender</th>
              <th className="py-2 px-4 border-b">Interview score</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {applicantList.map((applicant, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border-b">{applicant.fullname}</td>
                <td className="py-2 px-4 border-b">{applicant.gender}</td>
                <td className="py-2 px-4 border-b">{applicant.phone_number}</td>
                <td className="py-2 px-4 border-b">{applicant.resume_url}</td>
                <td className="py-2 px-4 border-b">{applicant.education}</td>
                <td className="py-2 px-4 border-b">{applicant.experience}</td>
                <td className="py-2 px-4 border-b">{applicant.skills}</td>
                <td className="py-2 px-4 border-b">{applicant.email}</td>
                <td className="py-2 px-4 border-b">{}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-blue-500 mr-2 text-white rounded px-2 hover:bg-blue-600">
                    pending
                  </button>
                  <button className="bg-red-800 mr-2 text-white rounded px-2 hover:bg-red-500">
                    Viwed
                  </button>
                  <button className="bg-red-800 mr-2 text-white rounded px-2 hover:bg-red-500">
                    Cancel
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

export default ApplicantList;
