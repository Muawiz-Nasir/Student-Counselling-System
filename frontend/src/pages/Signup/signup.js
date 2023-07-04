import { Link } from 'react-router-dom';
import './signup.css';

const Signup = () => {
    return <div className="signup-container">
    <form>
        <h2>Register</h2>
        <label for="fname"><b>First Name</b></label>
        <input type="text" placeholder="Enter First Name" name="fname" />
        <label for="lname"><b>Last Name</b></label>
        <input type="text" placeholder="Enter Last Name" name="lname" />
        <label for="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Your Email" name="email" />
        <label for="pswd"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="pswd" />
        <label for="conpswd"><b>Confirm Password</b></label>
        <input type="password" placeholder="Confirm Password" name="conpswd" />
        <input type="submit" value="Register" name="signup" />
       
    </form>
    <div className="signup-footer">
        <p>Already have an account?</p>
        <Link to="/login">Sign in</Link>
    </div>
    </div>
}
export default Signup;