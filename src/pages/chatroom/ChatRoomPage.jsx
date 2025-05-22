import React, { useContext, useState } from "react";
import ChatRoomHeader from "../../components/chatroom/ChatRoomHeader";
import CommunityNavLink from "../../components/community/CommunityNavLink";
import ChatRoomList from "../../components/chatroom/chatRoomList";
import { AdminContext } from "../../utils/AdminContext";

const ChatRoomPage = () => {
  const [search, setSearch] = useState("");
  const { refetchTrigger } = useContext(AdminContext);
  return (
    <div>
      <ChatRoomHeader search={search} setSearch={setSearch} />
      <CommunityNavLink />
      <ChatRoomList search={search} refetchTrigger={refetchTrigger} />
    </div>
  );
};

export default ChatRoomPage;
