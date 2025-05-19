import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import FormInput from "../../FromInput";
import Loading from "../../Loading";
import useGetSingleCommunity from "../../../hooks/community/useGetSingleCommunity";
import useUpdateCommunity from "../../../hooks/community/useUpdateCommunity";

const EditCommunityForm = () => {
  const [name, setName] = useState("");

  const { id } = useParams();

  const { community, loading: communityLoading } = useGetSingleCommunity({
    id,
  });
  const { updateCommunity, loading } = useUpdateCommunity();

  useEffect(() => {
    if (community) {
      setName(community.communityName || "");
    }
  }, [community]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Community name is required.");
      return;
    }

    await updateCommunity({
      communityName: name,
      id,
    });
  };

  if (communityLoading || loading) {
    return (
      <div>
        <Loading /> {/* Display loading spinner */}
      </div>
    );
  }
  if (!community) return <p>Community not found.</p>;

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <h4 className="text-[#4F4F4F] text-3xl p-6 font-semibold">
        Edit Community
      </h4>

      <div className="max-w-150 h-80 py-6 px-6">
        <FormInput
          label="Community Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter community name"
        />
      </div>

      <div className="max-w-190 px-6 flex justify-end">
        <button
          className="bg-[#48089F] w-32 text-white rounded-sm px-3 py-2.5 text-sm font-semibold hover:bg-[#ba9fd6] hover:scale-105 transition-transform duration-300"
          type="submit"
        >
          {loading ? "Updating..." : "Update"}
        </button>
      </div>
    </form>
  );
};

export default EditCommunityForm;
