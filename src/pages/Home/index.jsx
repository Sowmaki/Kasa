import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LogementsWrapper from "../../components/LogementsWrapper";
import '../Home/Home.scss';


const Home = ({ logements }) => {
  return (
    <div>
      <Header />
      <main className="home">
        <Banner image="src/assets/images/banner-img_home.png" text={"Chez vous, partout et ailleurs"} />
        <LogementsWrapper logements={logements} />
      </main>
      <Footer />
    </div>
  )
};

export default Home;
