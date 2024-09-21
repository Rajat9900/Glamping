// src/App.jsx

import { Route, Routes } from 'react-router-dom';

import HeroSection from './components/heroSection/HeroSection';
import Checkin from './components/checkin/Checkin';
import Discovery from './components/discovery/Discovery';
import Footer from './components/footer/Footer';
import ListingPage from './pages/listingPage/ListingPage';
import Homepage from './pages/homePage/Homepage';



const App = () => {
  return (
  <>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/listingPage" element={<ListingPage/>} />
        </Routes>
     
      </>
  );
};

export default App;

