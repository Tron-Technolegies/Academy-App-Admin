const validateInstructor = ({
  name,
  email,
  phoneNumber,
  designation,
  gender,
  password,
}) => {
  const errors = {};

  if (!name?.trim()) errors.name = "Name is required";

  if (!email?.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Invalid email format";

  if (phoneNumber && !/^\+?\d{8,15}$/.test(phoneNumber))
    errors.phoneNumber = "Invalid phone number";

  if (!designation?.trim()) errors.designation = "Designation is required";

  if (!gender) errors.gender = "Gender is required";

  if (password && password.length > 0 && password.length < 6)
    errors.password = "Password must be at least 6 characters";

  return errors;
};

export default validateInstructor;
