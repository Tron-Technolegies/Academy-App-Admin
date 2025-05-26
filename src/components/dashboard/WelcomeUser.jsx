import React from "react";
import useGetUserInfo from "../../hooks/auth/useGetUserInfo";
import Loading from "../Loading";

const WelcomeUser = () => {
  const { user, loading, error } = useGetUserInfo();

  return (
    <div className="m-4 max-w-md">
      <h1 className="text-xl sm:text-2xl  font-semibold text-[#1D0B30]">
        Welcome,{" "}
        <span className="text-[#48089F]">
          {user && (user.firstName || user.lastName)
            ? `${user.firstName || ""}`.trim()
            : user?.email || "User"}
        </span>
        !
      </h1>
    </div>
  );
};

export default WelcomeUser;
