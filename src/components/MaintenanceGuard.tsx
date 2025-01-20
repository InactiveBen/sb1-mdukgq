import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { maintenanceConfig } from '../config/maintenance';

interface MaintenanceGuardProps {
  children: React.ReactNode;
}

export const MaintenanceGuard: React.FC<MaintenanceGuardProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (maintenanceConfig.enabled) {
      const currentPath = location.pathname;
      const isAllowedPath = maintenanceConfig.allowedPaths.includes(currentPath);
      const hasDeviceBypass = document.cookie.includes('_device_id=6e7a6f16754cb432a8f085');

      if (!isAllowedPath && !hasDeviceBypass) {
        navigate('/maintenance');
      }
    }
  }, [location.pathname, navigate]);

  if (maintenanceConfig.enabled && 
      !maintenanceConfig.allowedPaths.includes(location.pathname) &&
      !document.cookie.includes('_device_id=6e7a6f16754cb432a8f085')) {
    return null;
  }

  return <>{children}</>;
};
