import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });

  const hundleLogin = (e) => {
    e.preventDefault();
    const userLoger = JSON.parse(localStorage.getItem("User"));

    if (
      input.email === userLoger.email &&
      input.password === userLoger.password
    ) {
      navigate("/");
    } else {
      alert("wrong email or password");
    }

    localStorage.setItem("loggedin", true);
  };
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <form
        onSubmit={hundleLogin}
        className="flex flex-col justify-center items-center bg-gray-200 w-[400px] h-[450px]"
      >
        <h1 className="text-2xl font-bold ">Welcome To Login</h1>
        <p>Welcome Back! Please Enter Your Details</p>
        <div className="w-[400px] h-[300px] flex flex-col justify-center items-center gap-5 ">
          <input
            type="email"
            required
            name="email"
            id="email"
            className="border-[1px] border-black p-2 w-72 outline-none rounded-md "
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          <input
            type="password"
            required
            name="password"
            id="password"
            className="border-[1px] border-black p-2 w-72 outline-none rounded-md "
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />

          <button
            className="bg-indigo-900 text-white px-3 py-2 border-none w-[290px] rounded-lg"
            type="submit"
          >
            Login
          </button>
          <Link to={"/singup"}>SingUp</Link>
        </div>
      </form>
    </div>
  );
}
export default Login;
