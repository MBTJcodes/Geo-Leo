import { Country, Difficulty } from '../types';
import { countries } from './countries';

export const shuffleString = (str: string): string => {
  const arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
};

export const getRandomCountry = (difficulty: Difficulty): Country => {
  const difficultyCountries = countries[difficulty];
  return difficultyCountries[Math.floor(Math.random() * difficultyCountries.length)];
};