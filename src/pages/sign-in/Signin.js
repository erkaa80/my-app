import React, { useState } from "react";
import "./Signin.css";
import { useThemeContext } from "../../context/ThemeContext";

export const Signin = () => {
  const { theme } = useThemeContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      alert("Sign in successful");
      console.log(formData);
    } else {
      alert("Please enter all fields");
    }
  };

  return (
    <div
      id="sign-in-container"
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
      }}
    >
      <form id="form-container">
        <h1>Sign In</h1>

        <input
          className="inputClass"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="inputClass"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="btn" type="submit" onClick={handleSubmit}>
          Sign In
        </button>
      </form>
    </div>
  );
};
