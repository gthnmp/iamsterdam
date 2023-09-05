import Header from "./components/Header";
import Navbar from "./components/Navbar";
import News from "./components/MainArticle";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className='w-screen h-full overflow-x-hidden'>
      <Navbar />
      <Header />
      <News />
      <Footer/>
    </div>
  );
};

export default Home;
