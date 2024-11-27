import DOMPurify from 'dompurify';

export const sanitizeHTML = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  });
};

export const sanitizeURL = (url: string): string => {
  const sanitized = DOMPurify.sanitize(url);
  if (sanitized.startsWith('javascript:')) {
    return '#';
  }
  return sanitized;
};
