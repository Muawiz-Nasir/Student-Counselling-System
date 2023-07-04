import './logintype.css';

const Logintype = () => {
    return <div className="logintype-container">
    <h2>Choose Your Login</h2>
    <div className="login-type">
    
        <div className="admin">
            <image src="./images/admin.png" height="100px" width="100px" />
            <a href="./login.html">Admin</a>
        </div>
        <div className="counselor">
            <image src="./images/counselor.png" height="100px" width="100px" />
            <a href="./login.html">Counselor</a>
        </div>
        <div className="student">
            <image src="./images/student.png" height="100px" width="100px" />
            <a href="./login.html">Student</a>
        </div>
    </div>
    </div>
}
export default Logintype;