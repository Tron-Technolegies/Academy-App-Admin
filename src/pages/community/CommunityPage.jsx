import React from "react";
import CommunityList from "../../components/community/CommunityList";
import CommunityHeader from "../../components/community/communityHeader";
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
