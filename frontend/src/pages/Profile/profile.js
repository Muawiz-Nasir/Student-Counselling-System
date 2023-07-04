import './profile.css';

const Profile = () => {
  return <div className="profile-container">

    <h2>New Student Registration</h2>

    <form>
      {/* <!-- Personal Biodata --> */}
      <div class="form-section">
        <h3>Personal Biodata</h3>
        <div class="form-group">
          <label for="full-name">Full Name:</label>
          <input type="text" id="full-name" name="full-name" required />
        </div>
        <div class="form-group">
          <label for="date-of-birth">Date of Birth:</label>
          <input type="date" id="date-of-birth" name="date-of-birth" required />
        </div>
        <div class="form-group">
          <label for="gender">Gender:</label>
          <select id="gender" name="gender" required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div class="form-group">
          <label for="email">Email Address:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="address">Residential Address:</label>
          <textarea id="address" name="address" rows="3" required></textarea>
        </div>
        <div class="form-group">
          <label for="profile-pic">Profile Picture:</label>
          <input type="file" id="profile-pic" name="profile-pic" />
        </div>
      </div>

      {/* <!-- Educational Background --> */}
      <div class="form-section">
        <h3>Educational Background</h3>
        <div class="form-group">
          <label for="education-level">Highest Education Level:</label>
          <input type="text" id="education-level" name="education-level" required />
        </div>
        <div class="form-group">
          <label for="institution">School/College/University Name:</label>
          <input type="text" id="institution" name="institution" required />
        </div>
        <div class="form-group">
          <label for="major">Field of Study/Major:</label>
          <input type="text" id="major" name="major" required />
        </div>
        <div class="form-group">
          <label for="graduation-year">Graduation Year:</label>
          <input type="text" id="graduation-year" name="graduation-year" required />
        </div>
      </div>

      {/* <!-- Family History --> */}
      <div className="form-section">
        <h3>Family History</h3>
        <div className="form-group">
          <label for="parents-names">Parents' Names:</label>
          <input type="text" id="parents-names" name="parents-names" required />
        </div>
        <div className="form-group">
          <label for="parents-occupation">Parents' Occupation:</label>
          <input type="text" id="parents-occupation" name="parents-occupation" required />
        </div>
        <div className="form-group">
          <label for="siblings">No. of Siblings:</label>
          <input type="text" id="siblings" name="siblings" required />
        </div>
        <button className="submit">Submit</button>
      </div>
    </form>
  </div>
}
export default Profile;