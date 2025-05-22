import React, { useContext, useState } from "react";
import SubCommunityList from "../../components/subcommunity/SubCommunityList";
import SubCommunityHeader from "../../components/subcommunity/SubCommunityHeader";
import CommunityNavLink from "../../components/community/CommunityNavLink";
import { AdminContext } from "../../utils/AdminContext";

const SubCommunityPage = () => {
  const [search, setSearch] = useState("");
  const { refetchTrigger } = useContext(AdminContext);

  return (
    <div>
      <SubCommunityHeader search={search} setSearch={setSearch} />
      <CommunityNavLink />
      <SubCommunityList search={search} refetchTrigger={refetchTrigger} />
    </div>
  );
};

export default SubCommunityPage;
