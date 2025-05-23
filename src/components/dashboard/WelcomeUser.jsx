import React from "react";
import useGetUserInfo from "../../hooks/auth/useGetUserInfo";
import Loading from "../Loading";

const WelcomeUser = () => {
  const { user, loading, error } = useGetUserInfo();

  return (
    <div>
      <h1>
        Welcome,{" "}
        {user && (user.firstName || user.lastName)
          ? `${user.firstName || ""} ${user.lastName || ""}`.trim()
          : user?.email || "User"}
        !
      </h1>
    </div>
  );
};

export default WelcomeUser;
