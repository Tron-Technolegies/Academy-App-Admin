import React, { useEffect, useState } from "react";
import useGetUserStats from "../../hooks/admin/useGetUserStats";
import Loading from "../Loading";
import { cardStyles } from "../../utils/CardStyles";

const UserStats = () => {
  const { stats, loading } = useGetUserStats();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 p-6">
      {cardStyles.map((card) => (
        <div
          key={card.key}
          className={`rounded-xl shadow p-6 ${card.color} flex flex-col justify-between`}
        >
          <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
          <p className="text-3xl font-bold">
            {stats && stats[card.key] !== undefined ? stats[card.key] : 0}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserStats;
