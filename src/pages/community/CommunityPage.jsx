import React from "react";
import CommunityList from "../../components/community/CommunityList";
import CommunityHeader from "../../components/community/CommunityHeader";
import CommunityNavLink from "../../components/community/CommunityNavLink";

const CommunityPage = () => {
  return (
    <div>
      <CommunityHeader />
      <CommunityNavLink />
      <CommunityList />
    </div>
  );
};

export default CommunityPage;
