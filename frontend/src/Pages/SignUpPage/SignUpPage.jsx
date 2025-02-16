import { useState } from "react";
import "./SignUpPage.scss";
import axios from 'axios';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) newErrors.phonenumber = "Phone number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addUser = async () => {
    try {
        const response = await axios.post('http://localhost:5000/addUser', formData);
        console.log('User added', response.data)
    } catch (error) {
        console.log('error adding user', error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      addUser();
    }
  };

  return (
    <section className="signup">
      <form className="signup__form" onSubmit={handleSubmit}>
        {[
          { name: "firstName", label: "First Name" },
          { name: "lastName", label: "Last Name" },
          { name: "email", label: "Email Address" },
          { name: "phone", label: "Phone Number" },
          { name: "password", label: "Password" },
          { name: "confirmpassword", label: "Confirm Password" },
        ].map(({ name, label }) => (
          <div className="signup__field" key={name}>
            <label htmlFor={name} className="signup__label">
              <span className="signup__tags">{label}</span>
            </label>
            <input
              type={name.includes("password") ? "password" : "text"}
              id={name}
              name={name}  // Corrected name attribute
              className={`signup__input ${errors[name] ? "signup__input--error" : ""}`}
              value={formData[name]}  // Corrected value binding
              onChange={handleChange}
            />
            {errors[name] && <p className="signup__error">{errors[name]}</p>}
          </div>
        ))}
        <button className="signup__button" type="submit">Sign Up</button>
      </form>
    </section>
  );
};

export default SignUpPage;
