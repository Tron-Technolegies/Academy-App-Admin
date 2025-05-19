import React, { useEffect, useState } from "react";
import FormInput from "../../FromInput";
import FormSelect from "../../FormSelect";
import useUpdateInstructor from "../../../hooks/instructor/useUpdateInstructor";
import { Link, useParams } from "react-router-dom";
import useGetSingleInstructor from "../../../hooks/instructor/useGetSingleInstructor";
import Loading from "../../Loading";
import validateInstructor from "../../../utils/validateInstructor";

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
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

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
      setPassword("");
    }
  }, [instructor]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateInstructor({
      name,
      email,
      phoneNumber,
      designation,
      gender,
      password,
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    await updateInstructor({
      fullName: name,
      email,
      phoneNumber,
      designation,
      gender,
      password,
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
    <div>
      <h4 className="text-[#4F4F4F] text-3xl font-semibold p-6">
        Edit Teacher
      </h4>

      <form onSubmit={handleSubmit} className="space-y-7 p-6 bg-white ">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left side: Inputs */}
          <div className="flex-1 space-y-3">
            <FormInput
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=""
              error={errors.name}
            />
            <FormInput
              label="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=""
              error={errors.email}
            />
            <FormInput
              label="Phone number"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder=""
              error={errors.phoneNumber}
            />
            <FormInput
              label="Designation"
              type="text"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              placeholder=""
              error={errors.designation}
            />

            <FormSelect
              title="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              list={["Male", "Female"]}
            />
            <FormInput
              label="Password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=""
              error={errors.password}
            />
          </div>
        </div>

        <div className="flex justify-end items-end gap-2 p-4">
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
    </div>
  );
};

export default EditTeacherForm;
