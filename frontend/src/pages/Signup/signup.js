import "./signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useMutation } from "react-query";
import { SERVER_BASE_URL } from "../../config";

const Signup = () => {
  const [data, setData] = useState({
    name: "Abc Xyz",
    email: "abc@gmail.com",
    password: "123456",
    confirmPass: "123456",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const signup = async (formData) => {
    const response = await axios.post(`${SERVER_BASE_URL}/students`, formData);
    return response.data;
  };

  const mutation = useMutation(signup, {
    // Additional options can be specified here
    onError: () => {
      alert("Something went wrong");
    },
    onSuccess: () => {
      alert('student registered successfully');
      setData({
        name: "",
        email: "",
        password: "",
        confirmPass: "",
      })
    }
  });

  const handleRegister = (e) => {
    e.preventDefault();
    const { confirmPass, ...userData } = data;

    if (data.password !== data.confirmPass) {
      alert("Password Mismatch");
      return;
    }

    mutation.mutate(userData);
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <label for="name">
          <b>First Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          onChange={handleChange}
          value={data.name}
          required
          minLength={5}
        />
        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          onChange={handleChange}
          value={data.email}
          required
          minLength={5}
        />
        <label for="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={handleChange}
          value={data.password}
          required
          minLength={5}
        />
        <label for="confirmPass">
          <b>Confirm Password</b>
        </label>
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPass"
          onChange={handleChange}
          value={data.confirmPass}
          required
          minLength={5}
        />
        <input type="submit" value={mutation?.isLoading ? '...Registering' : 'Register' } name="signup" disabled={mutation.isLoading} />

        <div className="signup-footer">
          <p>Already have an account?</p>
          <Link to="/login">Sign in</Link>
        </div>
      </form>
    </div>
  );
};
export default Signup;
