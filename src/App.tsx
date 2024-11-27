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
// import { BusinessRequirementsPage } from './pages/BusinessRequirementsPage';
import { LoginPage } from './pages/LoginPage';
import { AdminPage } from './pages/AdminPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PageBanner } from './components/PageBanner';
import { ProductSentPage } from './pages/admin/templates/ProductSentPage';
import { SellerSignupPage } from './pages/admin/templates/SellerSignupPage';
import { NewLoginPage } from './pages/admin/templates/NewLoginPage';

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

function App() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <Router>
      <DomainRedirect />
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
          <Route path="/admin/pages/template/product_sent" element={<ProductSentPage />} />
          <Route path="/admin/pages/template/seller_signup" element={<SellerSignupPage />} />
          <Route path="/admin/pages/template/new_login" element={<NewLoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        {showBanner && <PageBanner onClose={() => setShowBanner(false)} />}
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
