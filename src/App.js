import './App.css';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import Popular from './components/popular/popular';
import Recommended from './components/recommended/recommended';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Popular></Popular>
      <Recommended></Recommended>
    </div>
  );
}

export default App;
