import './App.css';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import Popular from './components/popular/popular';
import Recommended from './components/recommended/recommended';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Popular></Popular>
      <Recommended></Recommended>
      <Footer></Footer>
    </div>
  );
}

export default App;
