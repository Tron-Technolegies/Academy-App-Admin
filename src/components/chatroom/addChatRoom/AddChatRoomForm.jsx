import React, { useState } from "react";

import useAddSubCommunity from "../../../hooks/subCommunity/useAddSubCommunity";
import useGetAllCommunity from "../../../hooks/community/useGetAllCommunities";
import FormInput from "../../FromInput";
import FormSelect from "../../FormSelect";
import useGetAllSubCommunity from "../../../hooks/subCommunity/useGetAllSubCommunity";
import useAddChatRoom from "../../../hooks/chatRoom/useAddChatRoom";
import { toast } from "react-toastify";

const AddChatRoomForm = () => {
  const [name, setName] = useState("");
  const [community, setCommunity] = useState("");
  const [subCommunity, setSubCommunity] = useState("");

  const { community: communities, loading: loadingCommunities } =
    useGetAllCommunity();
  const { subCommunity: subCommunities, loading: loadingSubCommunities } =
    useGetAllSubCommunity();
  const { addChatRoom, loading } = useAddChatRoom();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addChatRoom({
      chatRoomName: name,
      relatedCommunity: community,
      relatedSubCommunity: subCommunity,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <h4 className="text-[#4F4F4F] text-3xl p-6 font-semibold">
        Add Chat Room
      </h4>

      <div className="max-w-150 h-80 py-6 px-6">
        <FormSelect
          title="Community"
          value={community}
          onChange={(e) => setCommunity(e.target.value)}
          list={communities}
          multi={false}
          displayField="communityName"
        />
        <FormSelect
          title="sub community"
          value={subCommunity}
          onChange={(e) => setSubCommunity(e.target.value)}
          list={subCommunities}
          multi={false}
          displayField="subCommunityName"
        />
        <FormInput
          label="chat room name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=""
        />
      </div>

      <div className="max-w-190 px-6 flex justify-end">
        <button
          className="bg-[#48089F] w-32 text-white rounded-sm px-3 py-2.5 text-sm font-semibold hover:bg-[#ba9fd6] hover:scale-105 transition-transform duration-300"
          type="submit"
          disabled={loading || loadingCommunities || loadingSubCommunities}
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </div>
    </form>
  );
};

export default AddChatRoomForm;
