import React, { useState } from "react";
import FormInput from "../../FromInput";
import FormSelect from "../../FormSelect";

const EditTeacherForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Using mock logic (similar to your "instructor" dummy)
    const newTeacher = {
      name,
      email,
      phoneNumber,
      designation,
      gender,
    };

    // Reset (optional)
    setName("");
    setEmail("");
    setPhoneNumber("");
    setDesignation("");
  };

  const handleCancel = () => {
    // Clear form fields
    setName("");
    setEmail("");
    setPhoneNumber("");
    setDesignation("");
  };

  return (
    <div>
      <h4 className="text-[#4F4F4F] text-3xl font-semibold p-6">
        Edit Teacher
      </h4>

      <form onSubmit={handleSubmit} className="space-y-7 p-6 bg-white ">
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
              onchange={(e) => setGender(e.target.value)}
              list={["Male", "Female"]}
            />
          </div>

          {/* Right side: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://via.placeholder.com/200"
              alt="Teacher"
              className="rounded-md w-48 h-48 object-cover"
            />
          </div>
        </div>
      </form>
      <div className="flex justify-end items-end gap-2 p-4">
        <button
          type="button"
          onClick={handleCancel}
          className="bg-[#EEEDEE] rounded-sm px-4 py-2 text-sm font-semibold text-[#858585] w-32"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-[#48089F] w-32 text-white rounded-sm px-4 py-2 text-sm font-semibold hover:bg-[#ba9fd6] hover:scale-105 transition-transform duration-300"
        >
          update
        </button>
      </div>
    </div>
  );
};

export default EditTeacherForm;
