import React, { useState } from "react";
import FormInput from "../../FromInput";
import FormSelect from "../../FormSelect";
import useAddInstructor from "../../../hooks/instructor/useAddInstructor";

import { Link } from "react-router-dom";

const AddTeacherForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const { addInstructor, loading } = useAddInstructor();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addInstructor({
      fullName: name,
      email,
      phoneNumber,
      designation,
      gender,
      password,
    });
  };

  return (
    <div>
      <h4 className="text-[#4F4F4F] text-3xl font-semibold p-6">Add Teacher</h4>

      <form
        onSubmit={handleSubmit}
        className="space-y-7 p-6 bg-white w-full md:w-1/2 sm:3/4  "
      >
        {/* Flex container for form and image */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left side: Inputs */}
          <div className="flex-1 space-y-3">
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
              placeholder=""
            />
            <FormInput
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=""
            />
          </div>

          {/* <div className="flex-1 flex justify-center items-center">
            <img
              src={imageUrl || undefined}
              alt="Teacher"
              className="rounded-md w-48 h-48 object-cover"
            />
          </div> */}
        </div>

        {/* Buttons */}
        <div className="flex justify-end items-end gap-5 pt-4">
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
            {loading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTeacherForm;
