import React from "react";
import ModuleHeader from "../../components/module/ModuleHeader";
import DomainNavLink from "../../components/domain/DomainNavLink";
import ModuleList from "../../components/module/ModuleList";

const ModulePage = () => {
  return (
    <div>
      <ModuleHeader />
      <DomainNavLink />
      <ModuleList />
    </div>
  );
};

export default ModulePage;
