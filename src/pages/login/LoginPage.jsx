import React, { useState } from "react";
import useLogin from "../../hooks/auth/useLogin";

const LoginPage = () => {
  const { login, loading } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting login with:", { email, password });
    await login(email, password); // handled inside the hook
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="flex justify-center">
          <img src="src/assets/Tron2.png" className="w-[100px] h-[120px]"></img>
        </div>{" "}
        <h2 className="text-[#4F4F4F] text-[28px] leading-[100%] font-semibold text-center">
          Welcome,
          <br /> Log into your account
        </h2>
        <p className="mt-10 text-[#667085] font-semibold text-xl">
          It is our great pleasure to have <br /> you on board!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 w-100 mt-5">
          <div>
            <input
              type="email"
              className="w-full p-2 border border-[#A7A7A7] rounded-sm placeholder:font-semibold focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full p-2  border border-[#A7A7A7] rounded-sm placeholder:font-semibold  focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password "
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full p-2  border border-[#A7A7A7] rounded-sm bg-[#48089F] text-amber-50 font-semibold hover:bg-[#b59cd7] transition"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
