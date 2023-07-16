import { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AuthenticatedStudentPagesLayout = ({ children }) => {
    const navigate = useNavigate();

    const logoutUser = () => {
        localStorage.clear();
        window.location.reload();
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");
        if(!token || role !== 'STUDENT'){
            navigate("/")
        }
    }, [])

  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/studentProfile">Home</Link>
          </li>
          <li>
            <Link to="/profile">Edit Profile</Link>
          </li>
          <li>
            <Link to="/chat">Ask Question</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <li>
            <Link onClick={logoutUser}>Logout</Link>
          </li>
        </ul>
      </nav>
      {children}
    </Fragment>
  );
};

export default AuthenticatedStudentPagesLayout;
