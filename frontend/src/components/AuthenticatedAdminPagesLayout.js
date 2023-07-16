import { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AuthenticatedAdminPagesLayout = ({ children }) => {
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "ADMIN") {
      navigate("/");
    }
  }, []);

  return (
    <Fragment>
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "end",
            marginRight: "100px",
            marginBottom: "40px"
          }}
        >
          <li>
            <Link to={'/faq'}>FAQs</Link>
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

export default AuthenticatedAdminPagesLayout;
