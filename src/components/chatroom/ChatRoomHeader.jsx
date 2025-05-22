import React, { useContext } from "react";
import AddButton from "../AddButton";
import { AdminContext } from "../../utils/AdminContext";
import SearchBox from "../SearchBox";

const ChatRoomHeader = ({ search, setSearch }) => {
  const { setRefetchTrigger, refetchTrigger } = useContext(AdminContext);
  return (
    <div>
      <div className="flex justify-between items-center p-6">
        <h4 className="text-xl sm:text-3xl text-[#1D0B30] font-semibold pl-5 sm:pl-0">
          Community
        </h4>
        <AddButton route={"/community/chatroom/new"} title={"Add"} />
      </div>
      <div className="w-full p-4">
        <SearchBox
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          submit={() => setRefetchTrigger(!refetchTrigger)}
          placeholder="search by chat room"
        />
      </div>
    </div>
  );
};

export default ChatRoomHeader;
