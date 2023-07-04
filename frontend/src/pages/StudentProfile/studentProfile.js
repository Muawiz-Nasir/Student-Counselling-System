import './studentProfile.css';

const Studentprofile = () => {
  return <div className="studentprofile-container">
    <h2>Registered Student Profile</h2>

    <div className='header-btn'>
      <button className='edit-btn'>Edit Profile</button>
      <button className='chatus-btn'>Ask Any Query</button>
    </div>

    <form>
      {/* <!-- Personal Biodata --> */}
      <div className="form-section">
        <h3>Personal Biodata</h3>
        <div className="form-group">
          <label for="full-name" />Full Name:
          <p>Asad Khan</p>
        </div>
        <div className="form-group">
          <label for="date-of-birth">Date of Birth:</label>
          <p>12<sup>th</sup> Aug, 1999</p>
        </div>
        <div className="form-group">
          <label for="gender">Gender:</label>
          <p>Male</p>
        </div>
        <div className="form-group">
          <label for="phone">Phone Number:</label>
          <p>0321-1234567</p>
        </div>
        <div className="form-group">
          <label for="email">Email Address:</label>
          <p>asadkhan@gmail.com</p>
        </div>
        <div className="form-group">
          <label for="address">Residential Address:</label>
          <p>Gulberg, Lahore</p>
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
          <p>Bcahelors</p>
        </div>
        <div class="form-group">
          <label for="institution">School/College/University Name:</label>
          <p>Virtual University of Pakistan</p>
        </div>
        <div class="form-group">
          <label for="major">Field of Study/Major:</label>
          <p>Computer Science</p>
        </div>
        <div class="form-group">
          <label for="graduation-year">Graduation Year:</label>
          <p>2022</p>
        </div>
      </div>

      {/* <!-- Family History --> */}
      <div class="form-section">
        <h3>Family History</h3>
        <div class="form-group">
          <label for="parents-names">Parents' Names:</label>
          <p>Kamran Khan</p>
        </div>
        <div class="form-group">
          <label for="parents-occupation">Parents' Occupation:</label>
          <p>Lawyer</p>
        </div>
        <div className="form-group">
          <label for="siblings">No. of Siblings:</label>
          <p>3</p>
        </div>
      </div>
    </form>
  </div>
}
export default Studentprofile;