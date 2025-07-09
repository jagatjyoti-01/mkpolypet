import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const sections = [
    { title: "Supply Overview", value: "1,240 Units", description: "Total plastic material supplied this month." },
    { title: "Employees", value: "24", description: "Total number of active employees." },
    { title: "Attendance", value: "96%", description: "Monthly attendance average." },
    { title: "Recycling Batches", value: "18", description: "Recycling batches completed this month." },
    { title: "Client Orders", value: "12 Orders", description: "Pending client product orders." },
    { title: "Machine Status", value: "4/5 Active", description: "Live machine operations overview." },
    { title: "Daily Waste Processed", value: "320 kg", description: "Average waste processed today." },
    { title: "Revenue Generated", value: "₹1.5L", description: "Revenue from recycled materials this month." },
    { title: "Support Tickets", value: "3 Open", description: "Pending support queries from clients." },
  ];

  const graphData = [
    { month: "Jan", value: 60 },
    { month: "Feb", value: 80 },
    { month: "Mar", value: 45 },
    { month: "Apr", value: 90 },
    { month: "May", value: 70 },
    { month: "Jun", value: 100 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 my-20">
      {/* Banner */}
      <div className="bg-green-700 py-6 px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-white text-green-700 px-4 py-2 rounded hover:bg-red-500 hover:text-white"
        >
          Logout
        </button>
      </div>

      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-5 border-t-4 border-green-500"
            >
              <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
              <p className="text-2xl font-bold text-green-600 mt-2">{item.value}</p>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Simple Bar Graph */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Recycling Overview</h2>
          <div className="flex items-end gap-4 h-48">
            {graphData.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center w-full">
                <div
                  className="w-full bg-green-500 rounded-t-md transition-all duration-500"
                  style={{ height: `${item.value}%`, maxHeight: "100%" }}
                ></div>
                <span className="mt-2 text-sm text-gray-600">{item.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
