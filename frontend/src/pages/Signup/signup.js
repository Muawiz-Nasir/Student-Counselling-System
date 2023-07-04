import { Link } from 'react-router-dom';
import './signup.css';
import { useState } from 'react';

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    });
  }

  const handleRegister = (e) => {
    e.preventDefault();
  }

  return <div className="signup-container">
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <label for="name"><b>First Name</b></label>
      <input type="text" placeholder="Enter Your Name" name="name" onChange={handleChange} value={data.name} required/>
      <label for="email"><b>Email</b></label>
      <input type="email" placeholder="Enter Your Email" name="email" onChange={handleChange} value={data.email} required/>
      <label for="password"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} value={data.password} required/>
      <label for="confirmPass"><b>Confirm Password</b></label>
      <input type="password" placeholder="Confirm Password" name="confirmPass" onChange={handleChange} value={data.confirmPass} required/>
      <input type="submit" value="Register" name="signup" />

      <div className="signup-footer">
        <p>Already have an account?</p>
        <Link to="/login">Sign in</Link>
      </div>
    </form>
  </div>
}
export default Signup;