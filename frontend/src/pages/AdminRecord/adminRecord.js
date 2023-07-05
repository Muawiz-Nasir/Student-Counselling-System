import axios from "axios";
import AuthenticatedAdminPagesLayout from "../../components/AuthenticatedAdminPagesLayout";
import "./adminRecord.css";
import { SERVER_BASE_URL } from "../../config";
import { useQuery } from "react-query";

const AdminRecord = () => {
  const token = localStorage.getItem("token");

  const getStudents = () =>
    axios.get(`${SERVER_BASE_URL}/students`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  const getCounsellers = () =>
    axios.get(`${SERVER_BASE_URL}/admin/counseller`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  const studentsQuery = useQuery("studentsData", () => getStudents());
  const counsellersQuery = useQuery("counsellerData", () => getCounsellers());

  return (
    <AuthenticatedAdminPagesLayout>
      <div className="admin-container">
       <div>
       <h2>Counselor Details</h2>
        <div className="counselor-section">
          {
            counsellersQuery.isLoading && 'Loading'
          }
          {
            counsellersQuery.isSuccess && counsellersQuery?.data?.data?.length === 0 && "No record found"
          }
          {
            counsellersQuery?.data?.data?.length > 0 && <table className="counselor-table">
            <tr>
              <th>ID</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
            {
              counsellersQuery.data.map(() => <tr>
              <td>01</td>
              <td>Counselor1</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>)
            }
          </table>
          }
        </div>
       </div>

       <div className="students-table-wrapper">
       <h2>Student Details</h2>
       {
            studentsQuery.isLoading && 'Loading'
          }
          {
            studentsQuery.isSuccess && studentsQuery?.data?.data?.length === 0 && "No record found"
          }
        <table className="student-table">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Details</th>
          </tr>
          {
            studentsQuery?.data?.data?.length > 0 && (
              studentsQuery?.data?.data.map((student) => <tr>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              <td>18</td>
            </tr>)
            )
          }
        </table>
       </div>
      </div>
    </AuthenticatedAdminPagesLayout>
  );
};
export default AdminRecord;
