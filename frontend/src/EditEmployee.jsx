import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from 'axios';

function EditEmployee() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  
  const { state } = useLocation();
  const navigate = useNavigate();

  // 🔑 Get URL from environment variables
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (state) {
      setValue("Name", state.Name);
      setValue("email", state.email);
      setValue("mobile", state.mobile);
      setValue("designation", state.designation);
      setValue("companyName", state.companyName);
    }
  }, [state, setValue]);

  const savedModifiedEmp = async (modifiedEmp) => {
    try {
      // 🔄 Replaced hardcoded Render URL with dynamic URL string
      const res = await axios.put(`${API_URL}/employees/${state._id}`, modifiedEmp);
      if (res.status === 200) {
        navigate("/list");
      }
    } catch (err) {
      console.error("Update failed", err);
    }
  };
  
  return (
    <div>
      <h1 className="text-5xl text-center text-yellow-600">Edit Employee</h1>
      <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(savedModifiedEmp)}>
        <input type="text" {...register("Name")} className="mb-3 border-2 p-3 w-full rounded-2xl" />
        <input type="email" {...register("email")} className="mb-3 border-2 p-3 w-full rounded-2xl" />
        <input type="number" {...register("mobile")} className="mb-3 border-2 p-3 w-full rounded-2xl" />
        <input type="text" {...register("designation")} className="mb-3 border-2 p-3 w-full rounded-2xl" />
        <input type="text" {...register("companyName")} className="mb-3 border-2 p-3 w-full rounded-2xl" />
        <button type="submit" className="text-2xl rounded-2xl bg-yellow-600 text-white block mx-auto p-4">Save Changes</button>
      </form>
    </div>
  );
}

export default EditEmployee;