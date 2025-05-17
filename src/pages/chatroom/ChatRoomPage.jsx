import React from "react";
import ChatRoomHeader from "../../components/chatroom/ChatRoomHeader";
import CommunityNavLink from "../../components/community/CommunityNavLink";
import ChatRoomList from "../../components/chatroom/chatRoomList";

const ChatRoomPage = () => {
  return (
    <div>
      <ChatRoomHeader />
      <CommunityNavLink />
      <ChatRoomList />
    </div>
  );
};

export default ChatRoomPage;
