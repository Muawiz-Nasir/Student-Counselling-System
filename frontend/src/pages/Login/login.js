import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useMutation } from 'react-query';
import axios from 'axios';
import { SERVER_BASE_URL } from '../../config';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "abc@gmail.com",
    password: "123456",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const signup = async (formData) => {
    const response = await axios.post(`${SERVER_BASE_URL}/auth/login`, formData);
    return response.data;
  };

  const mutation = useMutation(signup, {
    onError: () => {
      alert("Something went wrong");
    },
    onSuccess: (response) => {
      console.log(response);
      alert('login success');
      setData({
        email: "",
        password: "",
      });

      const { role, data, token } = response;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("user", JSON.stringify(data));

      if(role === "STUDENT"){
        navigate("/studentProfile")
      }

    }
  });

  const handleLogin = (e) => {
    e.preventDefault();
    mutation.mutate(data);

  };


    return <div class="login-container">
      <form onSubmit={handleLogin}>
        <h2>Registered Member</h2>
        <label for="email">Username</label>
        <input type="text" placeholder="Enter your mail here" name="email" required onChange={handleChange} value={data.email}/>
        <label for="password">Password</label>
        <input type="password" placeholder="Password" name="password" required onChange={handleChange} value={data.password}/>
        {/* <label for="remember"><b>Remember me</b></label>
        <input type="checkbox" id="remember" name="remember" /> */}
        <button type="submit" disabled={mutation.isLoading}>Login</button>
        <div class="login-footer">
          <p>Not Registered Yet?</p>
          <Link to="/signup">Signup</Link>
        </div>
      </form>
    </div>
  }

export default Login;