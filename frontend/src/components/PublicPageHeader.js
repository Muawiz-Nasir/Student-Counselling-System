import { Link } from "react-router-dom";

const PublicPageHeader = () => {
    return <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="/faq">FAQs</Link></li>
    </ul>
  </nav>
}

export default PublicPageHeader;