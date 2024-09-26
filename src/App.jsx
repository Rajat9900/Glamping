// src/App.jsx

import { Route, Routes } from 'react-router-dom';
import ListingPage from './pages/listingPage/ListingPage';
import Homepage from './pages/homePage/Homepage';
import DetailPage from './pages/DetailPage/DetailPage';
import Files from './pages/files';
import MainHomePage from './pages/homepageMain/mainHomePage';
// import LoginModal from './modals/login/loginModal';


const App = () => {
  return (
  <>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/listingPage" element={<ListingPage/>} />
          <Route path="/mainhomepage" element={<MainHomePage/>} />
          {/* <Route path="/login" element={<LoginModal/>} /> */}
          <Route path="/listingdetailPage" element={<DetailPage/>} />
        </Routes>
     
      </>
  );
};

export default App;

