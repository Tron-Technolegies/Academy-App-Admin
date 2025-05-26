import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useGetSingleSubCommunity from "../../../hooks/subCommunity/useGetSingleSubCommunity";
import useUpdateSubCommunity from "../../../hooks/subCommunity/useUpdateSubCommunity";
import useGetAllCommunity from "../../../hooks/community/useGetAllCommunities";
import FormInput from "../../FromInput";
import FormSelect from "../../FormSelect";
import Loading from "../../Loading";

const EditSubCommunityForm = () => {
  const [name, setName] = useState("");
  const [community, setCommunity] = useState(""); // selected community id
  const { id } = useParams();

  const { community: communities = [], loading: loadingCommunities } =
    useGetAllCommunity();
  const { subCommunity, loading: loadingSubCommunity } =
    useGetSingleSubCommunity({ id });
  const { updateSubCommunity, loading: updating } = useUpdateSubCommunity();

  useEffect(() => {
    if (subCommunity) {
      const { subCommunityName, relatedCommunity } = subCommunity;
      setName(subCommunityName || "");
      setCommunity(relatedCommunity?._id || relatedCommunity || "");
    }
  }, [subCommunity]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateSubCommunity({
      subCommunityName: name,
      relatedCommunity: community,
      id,
    });
  };

  const isLoading = loadingSubCommunity || loadingCommunities || updating;
  if (isLoading) return <Loading />;

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <h4 className="text-[#4F4F4F] text-3xl p-6 font-semibold">
        Edit Sub Community
      </h4>

      <div className="max-w-150 h-auto py-6 px-6">
        <FormSelect
          title="Community"
          value={community}
          onChange={(e) => setCommunity(e.target.value)}
          list={communities}
          multi={false}
          displayField="communityName"
        />
        <FormInput
          label="Sub Community Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=""
        />
      </div>

      <div className="max-w-190 px-6 flex justify-end gap-5">
        <Link
          to="/community/subCommunity"
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

export default EditSubCommunityForm;
