// import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './home.css';
import PublicPagesLayout from '../../components/PublicPagesLayout';
// import { Modal } from "react-bootstrap";
// import { useState } from "react";

const Home = () => {
  return <PublicPagesLayout>
  <div className="home-container">
    <header>
      <h1>Welcome to the Online Student Counseling System</h1>
    </header>

    <section className="hero">
      <h2>Get Expert Guidance for Your Education Journey</h2>
      <p>We're here to support and guide you on your academic journey. Whether you need help with course registration,
        providing adequate guidance in acquiring the information related to respective college registration process</p>
      <Link to="/signup" className="home-btn">Get Started</Link>
    </section>

    <section className="features">
      <h2>Why Choose Our Counseling System?</h2>
      <div className="feature-item">
        <img src="./images/counselor.png" alt="Expert Counselors Img" />
        <h3>Expert Counselors</h3>
        <p>Our counselors are highly experienced and knowledgeable in various educational fields.</p>
      </div>
      <div className="feature-item">
        <img src="images/person.guid.png" alt="Personalized Guidance Img" />
        <h3>Personalized Guidance</h3>
        <p>We provide personalized guidance tailored to your unique needs and aspirations.</p>
      </div>
      <div className="feature-item">
        <img src="images/user-friendly.png" alt="Easy to Use Img" />
        <h3>Easy to Use</h3>
        <p>Our system is user-friendly, making it simple and convenient for you to access counseling services.</p>
      </div>
    </section>

    <footer>
      <p>&copy; 2023 Online Student Counseling System. All rights reserved.</p>
    </footer>

  </div>
  </PublicPagesLayout>
}

export default Home;