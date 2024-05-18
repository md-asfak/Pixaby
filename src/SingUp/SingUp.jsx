import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SingUp() {
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const hundleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("User", JSON.stringify(input));
    navigate("/login");
  };
  return (
    <>
      <section className="flex flex-col justify-center items-center py-20  ">
        <form
          onSubmit={hundleSubmit}
          className="flex flex-col justify-center items-center bg-gray-200 w-[400px] h-[450px]"
        >
          <h1 className="text-2xl font-bold ">Welcome To Sign Up Page</h1>
          <p>Welcome Back! Please Enter Your Details</p>
          <div className="w-[400px] h-[300px] flex flex-col justify-center items-center gap-5 ">
            <input
              type="text"
              name="name"
              id="name"
              required
              value={input.name}
              placeholder="Enter Your Name"
              className="border-[1px] border-black p-2 w-72 outline-none rounded-md "
              onChange={(e) => setInput({ ...input, name: e.target.value })}
            />
            <input
              type="email"
              name="email"
              id="email"
              required
              value={input.email}
              placeholder="Enter Your Email"
              className="border-[1px] border-black p-2 w-72 outline-none rounded-md "
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
            <input
              type="password"
              name="password"
              id="password"
              required
              value={input.password}
              placeholder="Enter Your Password"
              className="border-[1px] border-black p-2 w-72 outline-none rounded-md "
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />

            <button
              className=" bg-indigo-900 text-white px-3 py-2 border-none w-[290px] rounded-lg"
              type="submit"
            >
              Sing Up
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default SingUp;
