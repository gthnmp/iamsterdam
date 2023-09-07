import Header from "./components/Header";
import News from "./components/MainArticle";

const Home = () => {
  return (
    <div className='w-screen h-full overflow-x-hidden'>
      <Header />
      <News />
    </div>
  );
};

export default Home;
