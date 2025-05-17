import React from "react";
import SubCommunityList from "../../components/subcommunity/SubCommunityList";
import SubCommunityHeader from "../../components/subcommunity/SubCommunityHeader";
import CommunityNavLink from "../../components/community/CommunityNavLink";

const SubCommunityPage = () => {
  return (
    <div>
      <SubCommunityHeader />
      <CommunityNavLink />
      <SubCommunityList />
    </div>
  );
};

export default SubCommunityPage;
