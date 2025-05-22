import React, { useState } from "react";
import ModuleHeader from "../../components/module/ModuleHeader";
import DomainNavLink from "../../components/domain/DomainNavLink";
import ModuleList from "../../components/module/ModuleList";
import { useContext } from "react";
import { AdminContext } from "../../utils/AdminContext";

const ModulePage = () => {
  const [search, setSearch] = useState("");
  const { refetchTrigger } = useContext(AdminContext);
  return (
    <div>
      <ModuleHeader search={search} setSearch={setSearch} />
      <DomainNavLink />
      <ModuleList search={search} refetchTrigger={refetchTrigger} />
    </div>
  );
};

export default ModulePage;
