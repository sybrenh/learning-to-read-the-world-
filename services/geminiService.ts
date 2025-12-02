import { CountryData } from "../types";

// Stub functions to replace expensive AI calls
export const generateCountryExplanation = async (country: CountryData): Promise<string> => {
  return Promise.resolve("AI insights are currently disabled to save credits.");
};

export const generateQuizHint = async (targetCountry: CountryData): Promise<string> => {
  return Promise.resolve("Focus on the unique diacritics and character shapes.");
};
