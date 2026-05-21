import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 🔑 Get URL from environment variables
  const API_URL = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      
      // 🔄 Replaced hardcoded local port with variable link
      let res = await fetch(`${API_URL}/employees`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj),
      });

      if (res.ok) {
        navigate("/list");
      } else {
        let errorRes = await res.json();
        console.log("error response is ", errorRes);
        throw new Error(errorRes.error || "Failed to create employee");
      }
    } catch (err) {
      console.log("err in catch", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div>
      <h1 className="text-5xl text-center text-gray-600">Create New Employee</h1>
      <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" placeholder="Enter name " {...register("Name")} className="mb-3 border border-2 p-3 w-full rounded-2xl" />
        <input type="email" placeholder="Enter Email " {...register("email")} className="mb-3 border border-2 p-3 w-full rounded-2xl" />
        <input type="number" placeholder="Enter mobile number" {...register("mobile")} className="mb-3 border border-2 p-3 w-full rounded-2xl" />
        <input type="text" placeholder="Enter designation" {...register("designation")} className="mb-3 border border-2 p-3 w-full rounded-2xl" />
        <input type="text" placeholder="Enter name of the company" {...register("companyName")} className="mb-3 border border-2 p-3 w-full rounded-2xl" />
        <button type="submit" className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4">Add Emp</button>
      </form>
    </div>
  );
}

export default CreateEmp;