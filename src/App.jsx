// src/App.jsx

import { Route, Routes } from 'react-router-dom';
import ListingPage from './pages/listingPage/ListingPage';
import Homepage from './pages/homePage/Homepage';
import DetailPage from './pages/DetailPage/DetailPage';
import MainHomePage from './pages/homepageMain/mainHomePage';
import SignUpModal from './modals/othersignUp/OtherSignUpModal';
import ReviewOrder from './pages/reviewOrder/ReviewOrder';
import PaymentMethod from './pages/payments/PaymentMethod';
import PaymentSuccess from './components/paymentSucces/PaymentSuccess';
import PaymentCancel from './components/paymentCancel/PaymentCancel';
import LoginModal from './modals/login/LoginModal';
import OtpInput from './modals/otpInput/OtpInput';
import ResetPassword12 from './modals/resetpassword12/ResetPassword12';
// import LoginModal from './modals/login/loginModal';


const App = () => {
  return (
  <>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/listingPage" element={<ListingPage/>} />
          <Route path="/mainhomepage" element={<MainHomePage/>} />
          <Route path="/signupdetails" element={<SignUpModal/>} />
          <Route path="/reset-password/:token" element={<ResetPassword12/>} />
          <Route path="/loginPage" element={<LoginModal/>} />
          <Route path="/reviewOrderPage" element={<ReviewOrder/>} />
          <Route path="/paymentDetails" element={<PaymentMethod/>} />
          <Route path="/paymentSuccess" element={<PaymentSuccess/>} />
          <Route path="/paymentFail" element={<PaymentCancel/>} />
          <Route path="/otpSentResend" element={<OtpInput/>} />
          <Route path="/listingdetailPage" element={<DetailPage/>} />
        </Routes>
     
      </>
  );
};

export default App;

