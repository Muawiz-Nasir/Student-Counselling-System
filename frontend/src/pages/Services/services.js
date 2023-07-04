import './services.css';
const Services = () => {
    return <section id="services">
    <div className="services-container">
        <h2>Our Services</h2>
        <div className="service">
            <img src="./images/guidimages.png" alt="Academic Guidance Img" />
            <h3>Academic Guidance</h3>
            <p>Assisting students in selecting appropriate courses, majors, or programs based on their interests, skills, and career goals. Providing information about academic requirements, prerequisites, and course schedules.</p>
        </div>
        <div className="service">
            <img src="./images/careercouns.png" alt="Career Counseling Img" />
            <h3>Career Counseling</h3>
            <p>Helping students explore and assess career options based on their skills, interests, and values. Providing resources and tools for career exploration, such as career assessments, job market information, resume writing, and interview preparation.</p>
        </div>
        <div className="service">
            <img src="./images/Eduplann.png" alt="Educational Planning Img" />
            <h3>Educational Planning</h3>
            <p>Helping students create personalized academic plans to ensure they meet graduation requirements and make progress towards their educational goals. Monitoring students' progress and providing guidance for course selection, credit transfers, and academic success.</p>
        </div>
        <div className="service">
            <img src="./images/personalcouns.png" alt="Personal Counseling Img" />
            <h3>Personal Counseling</h3>
            <p>Offering support and guidance for students facing personal challenges that may affect their academic performance or well-being. Providing a safe and confidential space for students to discuss their concerns, manage stress, improve time management, and develop coping strategies.</p>
        </div>
        <div className="service">
            <img src="./images/coll.selec.jpg" alt="College/University Selection Img" />
            <h3>College/University Selection</h3>
            <p>Providing guidance on researching and selecting suitable colleges or universities that align with the student's academic and career aspirations. Offering information on admission requirements, campus facilities, extracurricular activities, and financial aid options.</p>
        </div>
    </div>
</section>

}
export default Services;