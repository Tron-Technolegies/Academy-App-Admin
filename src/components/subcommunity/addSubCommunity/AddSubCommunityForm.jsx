import React, { useState } from "react";

import useAddSubCommunity from "../../../hooks/subCommunity/useAddSubCommunity";
import useGetAllCommunity from "../../../hooks/community/useGetAllCommunities";
import FormInput from "../../FromInput";
import FormSelect from "../../FormSelect";

const AddSubCommunityForm = () => {
  const [name, setName] = useState("");
  const [community, setCommunity] = useState("");

  const { addSubCommunity, loading: addingLoading } = useAddSubCommunity();
  const { community: communities, loading: loadingCommunities } =
    useGetAllCommunity();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addSubCommunity({
      subCommunityName: name,
      relatedCommunity: community,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <h4 className="text-[#4F4F4F] text-3xl p-6 font-semibold">
        Add Sub Community
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
        <FormInput
          label="sub community name"
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
          disabled={addingLoading || loadingCommunities}
        >
          {addingLoading ? "Adding..." : "Add"}
        </button>
      </div>
    </form>
  );
};

export default AddSubCommunityForm;
