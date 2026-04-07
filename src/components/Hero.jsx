import "./../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">

        <p className="tag">India’s First K-12 AI Ecosystem</p>

        <h1>
          Help your school <span className="highlight">lead the AI era</span><br />
          not just survive it.
        </h1>

        <p className="subtext">
          A complete AI ecosystem built for schools — personalized learning for students,
          powerful tools for teachers, and infrastructure to run it all.
        </p>

        <div className="hero-buttons">
          <button className="primary">Schedule a Call</button>
          <button className="secondary">See Products</button>
        </div>

      </div>
    </section>
  );
};

export default Hero;