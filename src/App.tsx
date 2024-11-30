import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductPage } from './pages/ProductPage';
import { SuccessPage } from './pages/SuccessPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { GiftCardSuccessPage } from './pages/GiftCardSuccessPage';
import { SupportPage } from './pages/SupportPage';
import { RedeemPage } from './pages/RedeemPage';
import { SignUpPage } from './pages/SignUpPage';
import { LoginPage } from './pages/LoginPage';
import { AdminPage } from './pages/AdminPage';
import { ServerErrorPage } from './pages/ServerErrorPage';
import { MaintenancePage } from './pages/MaintenancePage';
import { BannedPage } from './pages/BannedPage';
import { SitemapPage } from './pages/SitemapPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductSuccessPage } from './pages/ProductSuccessPage';

import { FeedbackPage } from './pages/FeedbackPage';
import { ProductSentPage } from './pages/admin/templates/ProductSentPage';
import { SellerSignupPage } from './pages/admin/templates/SellerSignupPage';
import { NewLoginPage } from './pages/admin/templates/NewLoginPage';
import { RequestFeedbackPage } from './pages/admin/templates/RequestFeedbackPage';
import { AgeVerificationDialog } from './components/AgeVerificationDialog';
import { MaintenanceGuard } from './components/MaintenanceGuard';
import { maintenanceConfig } from './config/maintenance';
import { FloatingChat } from './components/chat/FloatingChat';
import { Banner } from './components/Banner';
import { PageBanner } from './components/PageBanner';


function App() {
  const [showBanner, setShowBanner] = React.useState(true);
  const [showAgeVerification, setShowAgeVerification] = React.useState(false);

  React.useEffect(() => {
    const isVerified = document.cookie.includes('age_verified=');
    const isBanned = document.cookie.includes('age_failed_check=');
    if (!isVerified && !isBanned && !maintenanceConfig.enabled) {
      setShowAgeVerification(true);
    }
  }, []);

  return (
    <div className="w-full h-full min-h-screen flex flex-col">
      <Header />
      <MaintenanceGuard>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:productId" element={<ProductPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/gift-cards/success" element={<GiftCardSuccessPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/redeem" element={<RedeemPage />} />
          <Route path="/success/product" element={<ProductSuccessPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/server-error" element={<ServerErrorPage />} />
          <Route path="/maintenance" element={<MaintenancePage />} />
          <Route path="/banned" element={<BannedPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/admin/pages/template/product_sent" element={<ProductSentPage />} />
          <Route path="/admin/pages/template/seller_signup" element={<SellerSignupPage />} />
          <Route path="/admin/pages/template/new_login" element={<NewLoginPage />} />
          <Route path="/admin/pages/template/request_feedback" element={<RequestFeedbackPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MaintenanceGuard>
      <Footer />
      {showBanner && <Banner onClose={() => setShowBanner(false)} />}
      {showAgeVerification && !document.cookie.includes('age_failed_check') && !maintenanceConfig.enabled && (
        <AgeVerificationDialog onVerified={() => setShowAgeVerification(false)} />
      )}
      {!maintenanceConfig.enabled && <FloatingChat />}
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
  );
}

export default App;
