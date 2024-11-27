import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductPage } from './pages/ProductPage';
import { SuccessPage } from './pages/SuccessPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { SupportPage } from './pages/SupportPage';
import { RedeemPage } from './pages/RedeemPage';
import { SignUpPage } from './pages/SignUpPage';
import { LoginPage } from './pages/LoginPage';
import { AdminPage } from './pages/AdminPage';
import { ServerErrorPage } from './pages/ServerErrorPage';
import { MaintenancePage } from './pages/MaintenancePage';
import { BannedPage } from './pages/BannedPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PageBanner } from './components/PageBanner';
import { ProductSentPage } from './pages/admin/templates/ProductSentPage';
import { SellerSignupPage } from './pages/admin/templates/SellerSignupPage';
import { NewLoginPage } from './pages/admin/templates/NewLoginPage';
import { AgeVerificationDialog } from './components/AgeVerificationDialog';

// Domain redirect component
const DomainRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hostname = window.location.hostname;
    if (hostname === 'shopblox.shop') {
      window.location.href = `https://shopblox.gg${location.pathname}`;
    }
  }, [location]);

  return null;
};

// Age check component
const AgeCheck = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const isBanned = document.cookie.split(';').some(item => item.trim().startsWith('age_failed_check='));
    if (isBanned && location.pathname !== '/banned' && location.pathname !== '/support') {
      navigate('/banned');
    }
  }, [navigate, location]);

  return null;
};

function App() {
  const [showBanner, setShowBanner] = useState(true);
  const [showAgeVerification, setShowAgeVerification] = useState(false);

  useEffect(() => {
    const isVerified = document.cookie.split(';').some(item => item.trim().startsWith('age_verified='));
    const isBanned = document.cookie.split(';').some(item => item.trim().startsWith('age_failed_check='));
    if (!isVerified && !isBanned) {
      setShowAgeVerification(true);
    }
  }, []);

  const handleAgeVerified = () => {
    setShowAgeVerification(false);
  };

  return (
    <Router>
      <DomainRedirect />
      <AgeCheck />
      <div className="w-full h-full min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:productId" element={<ProductPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/redeem" element={<RedeemPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/server-error" element={<ServerErrorPage />} />
          <Route path="/maintenance" element={<MaintenancePage />} />
          <Route path="/banned" element={<BannedPage />} />
          <Route path="/admin/pages/template/product_sent" element={<ProductSentPage />} />
          <Route path="/admin/pages/template/seller_signup" element={<SellerSignupPage />} />
          <Route path="/admin/pages/template/new_login" element={<NewLoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        {showBanner && <PageBanner onClose={() => setShowBanner(false)} />}
        {showAgeVerification && !document.cookie.includes('age_failed_check') && (
          <AgeVerificationDialog onVerified={handleAgeVerified} />
        )}
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#171717',
              border: '1px solid #262626',
              color: '#fff',
            },
            className: 'font-sans'
          }}
        />
      </div>
    </Router>
  );
}

export default App;
