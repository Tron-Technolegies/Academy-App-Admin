import React from "react";
import DomainHeader from "../../components/domain/DomainHeader";

import DomainNavLink from "../../components/domain/DomainNavLink";
import DomainList from "../../components/domain/DomainList";

const DomainPage = () => {
  return (
    <div>
      <DomainHeader />
      <DomainNavLink />
      <DomainList />
    </div>
  );
};

export default DomainPage;
