import React, { useState, useEffect, useContext } from "react";
import useGetAllPlan from "../../hooks/plan/useGetAllPlan";
import AddButton from "../AddButton";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import useDeletePlan from "../../hooks/plan/useDeletePlan";
import { AdminContext } from "../../utils/AdminContext";
import { MdDeleteOutline } from "react-icons/md";

const cardColors = [
  "linear-gradient(to bottom, #F6E7FC, #9B7BBD)", // light purple
  "linear-gradient(to bottom, #D0E7FA, #6FA8DC)", // light blue
];

const PlanList = () => {
  const { loading, plan: plans, refetch } = useGetAllPlan();
  const { deletePlan } = useDeletePlan();

  const {
    showDeletePopup,
    setShowDeletePopup,
    deleteId,
    setDeleteId,
    setDeleteType,
    refetchTrigger,
  } = useContext(AdminContext);

  useEffect(() => {
    refetch();
  }, [refetchTrigger]);

  return loading ? (
    <Loading />
  ) : (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {plans.map((item, index) => (
          <div
            key={item._id}
            className="rounded-2xl shadow-lg p-6 border border-[#605BFF]"
            style={{
              background: cardColors[index % cardColors.length],
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
            <div className="flex gap-4 mt-4">
              <Link
                to={`/subscription/${item._id}/edit`}
                className="text-[#48089F] hover:text-[#ba9fd6] font-semibold"
              >
                Edit
              </Link>
              <button
                className="text-[#48089F] hover:text-[#ba9fd6] font-semibold"
                onClick={() => {
                  setShowDeletePopup(true);
                  setDeleteId(item._id);
                  setDeleteType("plan");
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanList;
