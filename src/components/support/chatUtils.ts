import { SupportOption } from './types';

const findKeywords = (text: string): string[] => {
  return text.toLowerCase().split(/\W+/).filter(word => word.length > 2);
};

const calculateRelevance = (keywords: string[], option: SupportOption): number => {
  const optionKeywords = [
    ...findKeywords(option.title),
    ...findKeywords(option.description)
  ];

  let score = 0;
  keywords.forEach(keyword => {
    if (optionKeywords.includes(keyword)) score++;
  });

  return score;
};

export const findMatchingOption = (
  text: string,
  options: SupportOption[]
): SupportOption | null => {
  const keywords = findKeywords(text);
  let bestMatch: SupportOption | null = null;
  let highestScore = 0;

  const checkOption = (option: SupportOption) => {
    const score = calculateRelevance(keywords, option);
    if (score > highestScore) {
      highestScore = score;
      bestMatch = option;
    }

    if (option.subOptions) {
      option.subOptions.forEach(checkOption);
    }
  };

  options.forEach(checkOption);

  // Only return a match if the score is above a threshold
  return highestScore >= 1 ? bestMatch : null;
};
