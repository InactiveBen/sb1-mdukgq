


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  createBrowserRouter, 
  RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Import all pages
import { HomePage } from './pages/HomePage';
import { FeedbackPage } from './pages/FeedbackPage';
import { ShopPage } from './pages/ShopPage';
import { ProductPage } from './pages/ProductPage';
import { SuccessPage } from './pages/SuccessPage';
import { ProductSuccessPage } from './pages/ProductSuccessPage';
import { TermsPage } from './pages/TermsPage';
import { VerifyEmploymentPage } from './pages/VerifyEmploymentPage';
import { PrivacyPage } from './pages/PrivacyPage';
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
import { GiftCardSuccessPage } from './pages/GiftCardSuccessPage';
import { ProductSentPage } from './pages/admin/templates/ProductSentPage';
import { SellerSignupPage } from './pages/admin/templates/SellerSignupPage';
import { NewLoginPage } from './pages/admin/templates/NewLoginPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="shop/:productId" element={<ProductPage />} />
      <Route path="success" element={<SuccessPage />} />
      <Route path="success/product" element={<ProductSuccessPage />} />
      <Route path="terms" element={<TermsPage />} />
      <Route path="privacy" element={<PrivacyPage />} />
      <Route path="support" element={<SupportPage />} />
      <Route path="redeem" element={<RedeemPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="admin" element={<AdminPage />} />
      <Route path="server-error" element={<ServerErrorPage />} />
      <Route path="maintenance" element={<MaintenancePage />} />
      <Route path="banned" element={<BannedPage />} />
      <Route path="verify" element={<VerifyEmploymentPage />} />
      <Route path="sitemap" element={<SitemapPage />} />
      <Route path="gift-cards/success" element={<GiftCardSuccessPage />} />
      <Route path="admin/pages/template/product_sent" element={<ProductSentPage />} />
      <Route path="admin/pages/template/seller_signup" element={<SellerSignupPage />} />
      <Route path="admin/pages/template/new_login" element={<NewLoginPage />} />
      <Route path="feedback" element={<FeedbackPage />} />

      <Route path="*" element={<NotFoundPage />} />

    </Route>
  ),
{
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true
    }
  }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
