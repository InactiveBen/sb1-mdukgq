export interface FeedbackParams {
  ticket?: string;
  order?: string;
  agent?: string;
  issue?: string;
  ServiceNow?: string;
}

export const validateFeedbackParams = (params: URLSearchParams): { isValid: boolean; error?: string } => {
  const validParams = ['ticket', 'order', 'agent', 'issue', 'ServiceNow', 'discord'];
  let hasValidParam = false;

  for (const param of validParams) {
    const value = params.get(param);
    if (value && /^\d+$/.test(value)) {
      hasValidParam = true;
      break;
    }
  }

  if (!hasValidParam) {
    return {
      isValid: false,
      error: "This feedback link has expired or is no longer valid. Please request a new feedback link from our support team."
    };
  }

  return { isValid: true };
};
