import React from "react";
import { Outlet, Link } from "react-router-dom";

function TeamLeaderPage() {
  return (
    <div className="flex h-screen">
      <div className="flex-none bg-blue-900 w-32 h-full">
        <div className="flex flex-col items-center align-text-top pb-3 mb-1 text-white">
          <img
            src="./assets/IElogo.png"
            alt="IE-network"
            className="h-32 w-32 mx-auto mb-4"
          />
          <div className="">
            <ul className="flex flex-col items-center ml-4">
              <li className="mt-2  h-8 w-28 hover:bg-slate-400 rounded">
                <Link to="/Criteria">Criteria</Link>
              </li>
              <li className="mt-2 h-8 w-28  hover:bg-slate-400 rounded">
                <Link to="/History">History</Link>
              </li>
              <li className="mt-2 h-8 w-28 hover:bg-slate-400 rounded">
                <Link to="/ApplicantList">Applicant List</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col  flex-grow">
        <div className="w-full p-4 bg-blue-300 ">
          <h1 className="text-5xl h-24 font-bold pt-8">Team name</h1>
        </div>
        <div className="flex-grow p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default TeamLeaderPage;
