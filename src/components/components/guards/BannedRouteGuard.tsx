import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface BannedRouteGuardProps {
  children: React.ReactNode;
}

export const BannedRouteGuard: React.FC<BannedRouteGuardProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const isBanned = document.cookie.split(';').some(item => item.trim().startsWith('age_failed_check='));
    const allowedPaths = ['/banned', '/terms', '/privacy', '/support'];
    
    if (isBanned && !allowedPaths.includes(location.pathname)) {
      navigate('/banned');
    }
  }, [location, navigate]);

  return <>{children}</>;
};
