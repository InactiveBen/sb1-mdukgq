export const maintenanceConfig = {
  enabled: true, // Toggle maintenance mode (true = enabled, false = disabled)
  
  // List of paths allowed during maintenance mode
  allowedPaths: [
    '/success',
    '/gift-cards/success',
    '/banned',
    '/support',
    '/terms',
    '/privacy',
    '/maintenance',
    '/feedback',
    '/admin/pages/template/request_feedback',
    '/admin/pages/template/new_login',
    '/admin/pages/template/seller_signup',
    '/admin/pages/template/product_sent',
    '/sitemap'
  ]
};
