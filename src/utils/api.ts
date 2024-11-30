interface FeedbackSubmission {
  rating: number;
  selectedOptions: string[];
  comment?: string;
  params: Record<string, string>;
}

export const submitFeedback = async (data: FeedbackSubmission): Promise<{ success: boolean }> => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  if (Math.random() > 0.1) {
    return { success: true };
  }
  
  throw new Error('Failed to submit feedback. Please try again.');
};
