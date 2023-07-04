import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/studentProfile")
  }

    return <div class="login-container">
      <form onSubmit={handleLogin}>
        <h2>Registered Member</h2>
        <label for="uname">Username</label>
        <input type="text" placeholder="Enter Username" name="uname" required />
        <label for="password">Password</label>
        <input type="password" placeholder="Password" name="password" required />
        {/* <label for="remember"><b>Remember me</b></label>
        <input type="checkbox" id="remember" name="remember" /> */}
        <button type="submit">Login</button>
        <div class="login-footer">
          <p>Not Registered Yet?</p>
          <Link to="/signup">Signup</Link>
        </div>
      </form>
    </div>
  }

export default Login;