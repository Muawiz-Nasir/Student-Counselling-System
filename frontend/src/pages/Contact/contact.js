import PublicPagesLayout from "../../components/PublicPagesLayout";
import "./contact.css";

const Contact = () => {
  return (
    <PublicPagesLayout>
      <section id="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label for="message">Message:</label>
              <textarea id="message" name="message" rows="5" required />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </PublicPagesLayout>
  );
};
export default Contact;
