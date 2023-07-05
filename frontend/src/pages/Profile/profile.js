import { useState } from "react";
import "./profile.css";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { SERVER_BASE_URL } from "../../config";

const Profile = () => {
  const [data, setData] = useState({
    name: "abcd",
    email: "abc@gmail.com",
    dob: "",
    gender: "",
    address: "",
    highestDegree: "",
    institute: "",
    fieldOfStudy: "",
    passingYear: "",
    fatherName: "",
    fatherOccupation: "",
    religion: "",
  });

  const token = localStorage.getItem("token");

  useQuery(
    "getData",
    () =>
      axios.get(`${SERVER_BASE_URL}/students/myProfile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    {
      onSuccess: (response) => {
        console.log("onSuccess", response);
        setData(response.data);
      },
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const updateStudent = async (formData) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const response = await axios.put(
      `${SERVER_BASE_URL}/students/${user.id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };

  const mutation = useMutation(updateStudent, {
    onError: () => {
      alert("Something went wrong");
    },
    onSuccess: (response) => {
      console.log(response);
      alert("update success");
      setData({
        email: "",
        password: "",
      });
    },
  });

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <div className="profile-container">
      <h2>Update Personal Details</h2>
      <form onSubmit={handleUpdateProfile}>
        {/* <!-- Personal Biodata --> */}
        <div class="form-section">
          <h3>Personal Biodata</h3>
          <div class="form-group">
            <label for="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={handleChange}
              value={data.name}
              minLength={4}
            />
          </div>
          <div class="form-group">
            <label for="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              onChange={handleChange}
              value={data.dob}
              minLength={4}
            />
          </div>
          <div class="form-group">
            <label for="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              onChange={handleChange}
              value={data.gender}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={handleChange}
              value={data.phone}
              minLength={4}
            />
          </div>
          <div class="form-group">
            <label for="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={handleChange}
              value={data.email}
              minLength={4}
            />
          </div>
          <div class="form-group">
            <label for="address">Residential Address:</label>
            <textarea
              id="address"
              name="address"
              rows="3"
              onChange={handleChange}
              value={data.address}
            ></textarea>
          </div>
          {/* <div class="form-group">
          <label for="profile-pic">Profile Picture:</label>
          <input type="file" id="profile-pic" name="profile-pic" />
        </div> */}
        </div>

        {/* <!-- Educational Background --> */}
        <div class="form-section">
          <h3>Educational Background</h3>
          <div class="form-group">
            <label for="highestDegree">Highest Education Level:</label>
            <input
              type="text"
              id="highestDegree"
              name="highestDegree"
              onChange={handleChange}
              value={data.highestDegree}
              minLength={4}
            />
          </div>
          <div class="form-group">
            <label for="institute">School/College/University Name:</label>
            <input
              type="text"
              id="institute"
              name="institute"
              onChange={handleChange}
              value={data.institute}
              minLength={4}
            />
          </div>
          <div class="form-group">
            <label for="fieldOfStudy">Field of Study/Major:</label>
            <input
              type="text"
              id="fieldOfStudy"
              name="fieldOfStudy"
              onChange={handleChange}
              value={data.fieldOfStudy}
              minLength={4}
            />
          </div>
          <div class="form-group">
            <label for="passingYear">Graduation Year:</label>
            <input
              type="text"
              id="passingYear"
              name="passingYear"
              onChange={handleChange}
              value={data.passingYear}
              minLength={4}
            />
          </div>
        </div>

        {/* <!-- Family History --> */}
        <div className="form-section">
          <h3>Family History</h3>
          <div className="form-group">
            <label for="fatherName">Parents' Names:</label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              onChange={handleChange}
              value={data.fatherName}
              minLength={4}
            />
          </div>
          <div className="form-group">
            <label for="fatherOccupation">Parents' Occupation:</label>
            <input
              type="text"
              id="fatherOccupation"
              name="fatherOccupation"
              onChange={handleChange}
              value={data.fatherOccupation}
              minLength={4}
            />
          </div>
          <div className="form-group">
            <label for="religion">Religion:</label>
            <input
              type="text"
              id="religion"
              name="religion"
              onChange={handleChange}
              value={data.religion}
              minLength={4}
            />
          </div>
          <button className="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Profile;
