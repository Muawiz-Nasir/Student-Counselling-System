import PublicPagesLayout from "../../components/PublicPagesLayout";
import "./about.css";

const About = () => {
  return (
    <PublicPagesLayout>
      <section id="about">
        <div className="about-container">
          <h2>About Us</h2>
          <p>
            Welcome to our online student counseling system, where we believe in
            empowering students to navigate life's challenges with confidence and
            resilience. Our dedicated team of experienced counselors is here to
            provide guidance, support, and a listening ear, tailored specifically
            to your unique needs. Whether you're facing academic stress, personal
            difficulties, or simply seeking advice, our goal is to help you thrive
            academically, emotionally, and socially. Join us on this journey of
            self-discovery, where together, we'll unlock your full potential and
            pave the way for a brighter future.
          </p>
          <p>
            At our online student counseling system, we prioritize your well-being
            and ensure counselor authenticity and assurity. Our counselors are highly
            qualified professionals with extensive experience in supporting students
            through various challenges. Rest assured, every counselor undergoes a
            rigorous selection process and adheres to strict ethical guidelines.
            We believe in fostering a safe and confidential environment,
            allowing you to share your concerns openly and trust that you will
            receive expert guidance tailored to your specific needs. Your journey
            towards personal growth and success is our utmost priority, and we
            are committed to helping you thrive.
          </p>
          {/* <a href="#" className="btn">
          Learn More
        </a> */}
        </div>
      </section>
    </PublicPagesLayout>
  );
};
export default About;
