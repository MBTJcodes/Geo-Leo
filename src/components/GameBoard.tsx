import React, { useState } from 'react';
import { MapPin, Check, ArrowRight } from 'lucide-react';
import { Country, Difficulty } from '../types';

interface GameBoardProps {
  scrambledName: string;
  country: Country;
  onGuess: (guess: string) => void;
  isCorrect: boolean;
  difficulty: Difficulty;
  onNext: () => void;
}

const GameBoard: React.FC<GameBoardProps> = ({
  scrambledName,
  country,
  onGuess,
  isCorrect,
  difficulty,
  onNext,
}) => {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGuess(guess);
  };

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Country Challenge</h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-2xl font-mono tracking-wider mb-2">{scrambledName}</p>
            <p className="text-sm opacity-90">Unscramble the letters to find the country</p>
          </div>

          {difficulty !== 'beginner' && (
            <div className="mt-4 text-sm">
              <p className="font-medium">Hint:</p>
              <p>{country.hint}</p>
            </div>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Enter your guess..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            disabled={isCorrect}
          />
        </div>

        {isCorrect ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-green-600">
              <Check className="w-5 h-5" />
              <span className="font-medium">Correct!</span>
            </div>
            <button
              onClick={onNext}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Next Country
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Check Answer
          </button>
        )}
      </form>
    </div>
  );
};

export default GameBoard;