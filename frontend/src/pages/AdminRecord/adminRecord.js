import AuthenticatedAdminPagesLayout from "../../components/AuthenticatedAdminPagesLayout";
import "./adminRecord.css";

const AdminRecord = () => {
  return (
    <AuthenticatedAdminPagesLayout>
      <div className="admin-container">
       <div>
       <h2>Counselor Details</h2>
        <div className="counselor-section">
          <table className="counselor-table">
            <tr>
              <th>ID</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>01</td>
              <td>Counselor1</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Counselor2</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td>Counselor3</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          </table>
        </div>
       </div>

       <div>
       <h2>Student Details</h2>
        <table className="student-table">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Details</th>
          </tr>
          <tr>
            <td>bc123456789</td>
            <td>Shahzaib Khan</td>
            <td>18</td>
            <td>18</td>
          </tr>
          <tr>
            <td>bc234567890</td>
            <td>Maria Anwar</td>
            <td>19</td>
            <td>18</td>
          </tr>
          <tr>
            <td>bc200400360</td>
            <td>Ahmad Hassan</td>
            <td>20</td>
            <td>18</td>
          </tr>
          <tr>
            <td>bc190400500</td>
            <td>Ayesha Khan</td>
            <td>21</td>
            <td>18</td>
          </tr>
          <tr>
            <td>bc200500420</td>
            <td>Ather Khaliq</td>
            <td>20</td>
            <td>18</td>
          </tr>
        </table>
       </div>
      </div>
    </AuthenticatedAdminPagesLayout>
  );
};
export default AdminRecord;
