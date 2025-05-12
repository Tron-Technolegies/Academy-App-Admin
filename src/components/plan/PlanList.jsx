import React, { useState, useEffect } from "react";
import useGetAllPlan from "../../hooks/plan/useGetAllPlan";
import AddButton from "../AddButton";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const PlanList = () => {
  const { loading, plan: plans, refetch } = useGetAllPlan();

  if (loading)
    return (
      <div>
        {" "}
        <Loading />
      </div>
    );
  return (
    <div className="mt-4">
      {plans.length === 0 ? (
        <div className="text-[#4b1361]">No plans available at the moment.</div>
      ) : (
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {plans.map((item) => (
            <div
              key={item._id}
              className="rounded-2xl shadow-lg p-6 border border-[#605BFF]"
              style={{
                background: "linear-gradient(to bottom, #F6E7FC, #9B7BBD)",
              }}
            >
              {/* Plan Name */}
              <h3 className="text-[#152259] text-2xl font-bold px-3">
                {item.planName}
              </h3>

              {/* Plan Description */}
              <p className="px-3 pt-3 text-sm font-semibold">
                Enjoy complete access
              </p>

              {/* Plan Price */}
              <p className="text-[#152259] font-bold text-3xl pt-4 pb-5">
                $ {item.price}
                <span className="text-[#152259] font-semibold text-xl ">
                  /per month
                </span>
              </p>

              <div>
                <h4 className="border-b border-white pb-1">Benefits</h4>
                <p className="font-semibold mb-1">Features</p>
                <ul className="text-sm font-semibold">
                  {item.features && item.features.length > 0 ? (
                    item.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))
                  ) : (
                    <li>No features listed.</li>
                  )}
                </ul>
              </div>
              <Link
                to={`/subscription/${item._id}/edit`}
                className=" mt-auto text-[#48089F] hover:text-[#ba9fd6] font-semibold"
              >
                Edit
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanList;
