export const maintenanceConfig = {
  enabled: true, // Toggle maintenance mode (true = enabled, false = disabled)
  
  // List of paths allowed during maintenance mode
  allowedPaths: [
    '/success',
    '/gift-cards/success',
    '/success/product',
    '/banned',
    '/support',
    '/terms',
    '/privacy',
    '/maintenance',
    '/feedback',
    '/sitemap'
  ]
};
