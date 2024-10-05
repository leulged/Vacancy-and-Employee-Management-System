import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

function ViewPost() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(null);
  const { Criteria } = location.state; 

  const handleMoreClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="flex w-screen ">
      <div className="border rounded-xl w-auto min-w-56 mx-5 p-3">
        <p>Title: {Criteria.title}</p>
        <p>Education Level: {Criteria.educational_level}</p>
        <p>Professional Skill (in years): {Criteria.experience}</p>
        <p>Required Employee: {Criteria.required_employee}</p>
        <p>Gender: {Criteria.gender}</p>
        {expanded === index && (
          <p className="break-words max-w-xs">
            Description: {Criteria.description}
          </p>
        )}
        <div className="flex mt-2">
            <button
              onClick={() => handleMoreClick(index)}
              className="mb-3 mt-1 w-20 pb-1 px-5 bg-green-600 text-white rounded hover:bg-green-700"
            >
              {expanded === index ? "Less" : "More"}
            </button>
          </div>
        <div className="border p-2 pl-6 shadow rounded">
          <button className=" bg-red-500 mr-6 text-white rounded px-4 hover:bg-red-800">
            Edit
          </button>
          <button className="bg-blue-500 mr-2 text-white rounded px-4 hover:bg-blue-700 ">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewPost;
