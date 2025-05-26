import React, { useEffect, useState } from "react";
import FormInput from "../../FromInput";
import FormSelect from "../../FormSelect";
import useUpdateInstructor from "../../../hooks/instructor/useUpdateInstructor";
import { Link, useParams } from "react-router-dom";
import useGetSingleInstructor from "../../../hooks/instructor/useGetSingleInstructor";
import Loading from "../../Loading";

const EditTeacherForm = () => {
  const { id } = useParams();
  const { updateInstructor, loading } = useUpdateInstructor();
  const { loading: loadingGetInstructor, instructor } = useGetSingleInstructor({
    id,
  });

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (instructor) {
      console.log("Instructor fetched:", instructor);
      setName(instructor.instructorDetails?.[0]?.instructorName || "");
      setEmail(instructor.email || "");
      setPhoneNumber(instructor.phoneNumber || "");
      setDesignation(instructor.instructorDetails?.[0]?.instructorRole || "");
      setGender(
        instructor.gender?.charAt(0).toUpperCase() +
          instructor.gender?.slice(1).toLowerCase() || ""
      );
    }
  }, [instructor]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateInstructor({
      fullName: name,
      email,
      phoneNumber,
      designation,
      gender,
      id,
    });
  };

  // const handleCancel = () => {
  //   // Clear form fields
  //   setName("");
  //   setEmail("");
  //   setPhoneNumber("");
  //   setDesignation("");
  //   setGender("");
  //   setPassword("");
  // };

  if (loadingGetInstructor) {
    return <Loading />;
  }

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <h4 className="text-[#4F4F4F] text-3xl p-6 font-semibold">
        Edit Teacher
      </h4>

      <div className="max-w-150 h-auto py-6 px-6 space-y-4">
        <FormInput
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=""
        />
        <FormInput
          label="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=""
        />
        <FormInput
          label="Phone number"
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder=""
        />
        <FormInput
          label="Designation"
          type="text"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          placeholder=""
        />

        <FormSelect
          title="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          list={["Male", "Female"]}
        />
      </div>

      <div className="max-w-190 px-6 flex justify-end gap-5">
        <Link
          to="/teachers"
          className="bg-[#EEEDEE] rounded-sm px-4 py-2 text-sm  text-center font-semibold text-[#858585] w-32"
        >
          Cancel
        </Link>
        <button
          type="submit"
          disabled={loading}
          className="bg-[#48089F] w-32 text-white rounded-sm px-4 py-2 text-sm font-semibold hover:bg-[#ba9fd6] hover:scale-105 transition-transform duration-300 disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update"}
        </button>
      </div>
    </form>
  );
};

export default EditTeacherForm;
