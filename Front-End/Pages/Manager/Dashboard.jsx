import React from "react";

function Dashboard() {
  const dashboard = [
    {
      NO: "",
      Team: "",
      Leader: "",
      Employee: "",
    },
    {
      NO: "1",
      Team: "Marketing",
      Leader: "Jane Smith",
      Employee: "9",
    },
  ];
  const filteredEmployees = dashboard.filter(
    (dashboard) => dashboard.Team && dashboard.Leader
  );
  return (
    <div>
      <div className="flex justify-around mt-10">
        <div className="border mx-8 rounded-3xl ">
          <p className="text-3xl px-5 py-4 border rounded-3xl ">Team</p>
          <div className="text-xl py-3 px-12 ">5</div>
        </div>
        <div className="border mx-8 rounded-3xl">
          <p className="text-3xl px-5 py-4 border rounded-3xl ">Employee</p>
          <div className="text-xl py-3 px-20 ">5</div>
        </div>
      </div>
      <div className="mt-10 ml-10">
        <table className="w-auto justify-center bg-white border border-gray-800 rounded ">
          <thead className="justify-around ">
            <tr>
              <th className="py-2 px-4 border-b">No</th>
              <th className="py-2 px-4 border-b">Team</th>
              <th className="py-2 px-4 border-b">Leader</th>
              <th className="py-2 px-4 border-b">Employee</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((dashboard, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border-b">{dashboard.NO}</td>
                <td className="py-2 px-4 border-b">{dashboard.Team}</td>
                <td className="py-2 px-4 border-b">{dashboard.Leader}</td>
                <td className="py-2 px-4 border-b">{dashboard.Employee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
