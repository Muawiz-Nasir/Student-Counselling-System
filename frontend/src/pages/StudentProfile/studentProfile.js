import { Link } from 'react-router-dom';
import './studentProfile.css';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { SERVER_BASE_URL } from '../../config';
import AuthenticatedStudentPagesLayout from '../../components/AuthenticatedStudentPagesLayout';

const Studentprofile = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  let { isLoading, isError, error, data } = useQuery('getData', () =>
    axios.get(`${SERVER_BASE_URL}/students/myProfile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError || !data?.data) {
  //   return <div>Error: {error.message}</div>;
  // }

  data = data?.data || {};

  return <AuthenticatedStudentPagesLayout>
    <div className="studentprofile-container">
    <h2>Registered Student Profile</h2>

    <form>
      {/* <!-- Personal Biodata --> */}
      <div className="form-section">
        <h3>Personal Biodata</h3>
        <div className="form-group">
          <label for="full-name">Full Name:</label>
          <p>{data?.name || '---'}</p>
        </div>
        <div className="form-group">
          <label for="date-of-birth">Date of Birth:</label>
          <p>{data?.dob || '---'}</p>
        </div>
        <div className="form-group">
          <label for="gender">Gender:</label>
          <p>{data?.gender || '---'}</p>
        </div>
        <div className="form-group">
          <label for="phone">Phone Number:</label>
          <p>{data?.phone || '---'}</p>
        </div>
        <div className="form-group">
          <label for="email">Email Address:</label>
          <p>{data?.email || '---'}</p>
        </div>
        <div className="form-group">
          <label for="address">Residential Address:</label>
          <p>{data?.address || '---'}</p>
        </div>
        {/* <div className="form-group">
          <label for="profile-pic">Profile Picture:</label>
          <img src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000' alt='student-img'/>
        </div> */}
      </div>

      {/* <!-- Educational Background --> */}
      <div class="form-section">
        <h3>Educational Background</h3>
        <div class="form-group">
          <label for="education-level">Highest Education Level:</label>
          <p>{data?.highestDegree || '---'}</p>
        </div>
        <div class="form-group">
          <label for="institution">School/College/University Name:</label>
          <p>{data?.institute || '---'}</p>
        </div>
        <div class="form-group">
          <label for="major">Field of Study/Major:</label>
          <p>{data?.fieldOfStudy || '---'}</p>
        </div>
        <div class="form-group">
          <label for="graduation-year">Graduation Year:</label>
          <p>{data?.passingYear || '---'}</p>
        </div>
      </div>

      {/* <!-- Family History --> */}
      <div class="form-section">
        <h3>Family History</h3>
        <div class="form-group">
          <label for="parents-names">Parents' Names:</label>
          <p>{data?.fatherName || '---'}</p>
        </div>
        <div class="form-group">
          <label for="parents-occupation">Parents' Occupation:</label>
          <p>{data?.fatherOccupation || '---'}</p>
        </div>
        <div className="form-group">
          <label for="religion">Religion:</label>
          <p>{data?.religion || '---'}</p>
        </div>
      </div>
    </form>
  </div>
  </AuthenticatedStudentPagesLayout>
}
export default Studentprofile;