import PublicPagesLayout from "../../components/PublicPagesLayout";
import "./about.css";

const About = () => {
  return (
    <PublicPagesLayout>
    <section id="about">
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          feugiat metus ut justo aliquet, eget eleifend mauris lobortis. Ut a
          enim eu sem aliquam laoreet a sed nisl. In sit amet neque maximus,
          posuere turpis non, suscipit lectus. Suspendisse vitae commodo nisl.
        </p>
        <p>
          Praesent maximus purus risus, id iaculis dui tincidunt eu. Sed maximus
          erat eget sollicitudin viverra. Morbi porttitor odio ut metus
          fringilla ultricies. Ut vel tellus malesuada, mattis lacus id,
          fringilla nulla. Vestibulum convallis est sed sagittis tempor.
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
