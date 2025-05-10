import React, { useState } from "react";
import FormInput from "../../FromInput";
import useUpdatePlan from "../../../hooks/plan/useUpdatePlan";
import { useParams } from "react-router-dom";

const EditPlanForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [features, setFeatures] = useState("");

  const { id } = useParams();
  const { updatePlan, loading } = useUpdatePlan();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPlan({
      planName: name,
      price: amount,
      features,
      id,
    });
  };

  return (
    <div className="flex justify-center p-6">
      <div className="w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl bg-white rounded-lg p-8 max-h-screen">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h4 className="text-[#4F4F4F] text-3xl font-semibold pb-4">
            Edit Subscription
          </h4>

          <FormInput
            label="Plan Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=""
          />

          <FormInput
            label="Amount"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder=""
          />
          <FormInput
            label="Validity"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder=""
          />

          <div>
            <label className="text-[#8A8A8A] font-medium">Features</label>
            <textarea
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              placeholder=""
              className="flex flex-col border border-[#c9bfbf] rounded-md w-80 h-30  bg-[#F5F5F5]  focus:outline-none"
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="bg-[#48089F]  py-2 px-4 min-w-20 rounded-sm text-white hover:scale-105"
              type="submit"
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditPlanForm;
