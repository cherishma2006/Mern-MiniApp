import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  // 🔑 Get URL from environment variables
  const API_URL = import.meta.env.VITE_API_URL;

  const gotoEmployee = (empObj) => {
    navigate("/employee", { state: empObj });
  };
  
  const gotoEditEmployee = (empObj) => {
    navigate("/edit-emp", { state: empObj });
  }; 

  const deleteEmpByID = async (id) => {
    try {
      // 🔄 Replaced hardcoded Render URL
      let res = await axios.delete(`${API_URL}/employees/${id}`);
      if (res.status === 200) {
        getEmps();
      }
    } catch (err) {
      console.error("Error deleting employee:", err);
    }
  };

  async function getEmps() {
    try {
      // 🔄 Replaced localhost:5173 with environment variable
      let res = await axios.get(`${API_URL}/employees`);
      const data = res.data.payload || res.data; 

      if (Array.isArray(data)) {
        setEmps(data);
      } else {
        console.error("Data is not an array:", data);
        setEmps([]);
      }
    } catch (err) {
      console.error("Error fetching emps:", err);
    }
  }

  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="text-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
        {emps.map((empObj) => (
          <div key={empObj._id} className="bg-white p-5 rounded-2xl gap-10">
            <p>{empObj.Name}</p>
            <p className="mb-2">{empObj.email}</p>
            <div className="flex justify-around">
              <button onClick={() => gotoEmployee(empObj)} className="bg-blue-400 p-2 rounded-2xl text-white">View</button>
              <button onClick={() => gotoEditEmployee(empObj)} className="bg-orange-400 p-2 rounded-2xl text-white">Edit</button>
              <button onClick={() => deleteEmpByID(empObj._id)} className="bg-red-600 p-2 rounded-2xl text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;