import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Banner } from './components/Banner';
import { AgeVerificationDialog } from './components/AgeVerificationDialog';
import { MaintenanceGuard } from './components/MaintenanceGuard';
import { maintenanceConfig } from './config/maintenance';

function App() {
  const [showBanner, setShowBanner] = useState(true);
  const [showAgeVerification, setShowAgeVerification] = useState(false);

  useEffect(() => {
    const isVerified = document.cookie.includes('age_verified=');
    const isBanned = document.cookie.includes('age_failed_check=');
    if (!isVerified && !isBanned && !maintenanceConfig.enabled) {
      setShowAgeVerification(true);
    }
  }, []);

  const handleAgeVerified = () => {
    setShowAgeVerification(false);
  };

  return (
    <div className="w-full h-full min-h-screen flex flex-col">
      <Header />
      <MaintenanceGuard>
        <Outlet />
      </MaintenanceGuard>
      <Footer />
      {showBanner && <Banner onClose={() => setShowBanner(false)} />}
      {showAgeVerification && !document.cookie.includes('age_failed_check') && !maintenanceConfig.enabled && (
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
  );
}

export default App;
