import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const About = () => {
  const sections = ["Fiabilité", "Respect", "Service", "Sécurité"]

  return (
    <>
      <Header />
      <main className="about">
        <Banner image="src/assets/images/banner-img_about.png" />
        <ul className="about-collapse-wrapper">
          {sections.map((section, index) => <Collapse info={null} key={`${section}${index}`} title={section} />)}
        </ul>
      </main>
      <Footer />
    </>

  );
};

export default About;
