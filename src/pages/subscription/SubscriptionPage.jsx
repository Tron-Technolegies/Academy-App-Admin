import React from "react";
import PlanList from "../../components/plan/PlanList";
import AddPlanHeader from "../../components/plan/addPlan/AddPlanHeader";
import PlanHeader from "../../components/plan/PlanHeader";

const SubscriptionPage = () => {
  return (
    <div className="flex flex-col p-8 overflow-auto">
      <PlanHeader />
      <PlanList />
    </div>
  );
};

export default SubscriptionPage;
