import React from "react";
import AddModuleHeader from "../../components/module/addModule/AddModuleHeader";
import AddModuleForm from "../../components/module/addModule/AddModuleForm";

const AddModulePage = () => {
  console.log("✅ AddModulePage loaded");
  return (
    <div>
      <AddModuleHeader />
      <AddModuleForm />
    </div>
  );
};

export default AddModulePage;
