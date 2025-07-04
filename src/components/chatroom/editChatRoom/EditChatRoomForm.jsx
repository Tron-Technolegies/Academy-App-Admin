import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetAllCommunity from "../../../hooks/community/useGetAllCommunities";
import useGetAllSubCommunity from "../../../hooks/subCommunity/useGetAllSubCommunity";
import useGetSingleChatRoom from "../../../hooks/chatRoom/useGetSingleChatRoom";
import useUpdateChatRoom from "../../../hooks/chatRoom/useUpdateChatRoom";
import { toast } from "react-toastify";
import FormInput from "../../FromInput";
import FormSelect from "../../FormSelect";
import Loading from "../../Loading";

const EditChatRoomForm = () => {
  const [name, setName] = useState("");
  const [community, setCommunity] = useState("");
  const [subCommunity, setSubCommunity] = useState("");
  const { id } = useParams();

  const { community: communities = [], loading: loadingCommunities } =
    useGetAllCommunity();
  const { subCommunity: subCommunities, loading: loadingSubCommunities } =
    useGetAllSubCommunity();
  const { chatRoom, loading: loadingChatRoom } = useGetSingleChatRoom({ id });
  const { updateChatRoom, loading: updating } = useUpdateChatRoom();

  useEffect(() => {
    if (chatRoom) {
      const { chatRoomName, relatedCommunity, relatedSubCommunity } = chatRoom;
      setName(chatRoomName || "");
      setCommunity(relatedCommunity || ""); // no _id, just the string ID
      setSubCommunity(relatedSubCommunity || ""); // same here
    }
  }, [chatRoom]);

  const filteredSubCommunities = subCommunities.filter(
    (sub) => sub.relatedCommunity?._id === community
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !community || !subCommunity.trim()) {
      toast.error("Please fill all the fields.");
      return;
    }

    await updateChatRoom({
      chatRoomName: name,
      relatedCommunity: community,
      relatedSubCommunity: subCommunity,
      id,
    });
  };

  const isLoading =
    loadingChatRoom || loadingSubCommunities || loadingCommunities || updating;
  if (isLoading) return <Loading />;

  if (!chatRoom)
    return <p className="p-4 text-red-500">Chat room not found.</p>;

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <h4 className="text-[#4F4F4F] text-3xl p-6 font-semibold">
        Edit Chat Room
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
          title="Sub Community"
          value={subCommunity}
          onChange={(e) => setSubCommunity(e.target.value)}
          list={filteredSubCommunities}
          multi={false}
          displayField="subCommunityName"
        />
        <FormInput
          label="Chat Room Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=""
        />
      </div>

      <div className="max-w-190 px-6 flex justify-end gap-5">
        <Link
          to="/community/chatroom"
          className="bg-[#EEEDEE] text-[#858585] rounded-sm w-32 px-10 py-2.5 text-sm font-semibold hover:bg-[#EEEDEE] hover:scale-105 transition-transform duration-300"
        >
          Cancel
        </Link>
        <button
          className="bg-[#48089F] w-32 text-white rounded-sm px-3 py-2.5 text-sm font-semibold hover:bg-[#ba9fd6] hover:scale-105 transition-transform duration-300"
          type="submit"
          disabled={updating}
        >
          {updating ? "Updating..." : "Update"}
        </button>
      </div>
    </form>
  );
};

export default EditChatRoomForm;
