import React, { useState, useEffect } from 'react';
import { Globe2, Trophy, Medal, Brain } from 'lucide-react';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';
import DifficultySelector from './components/DifficultySelector';
import { shuffleString, getRandomCountry } from './utils/gameUtils';
import { Difficulty } from './types';

function App() {
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');
  const [currentCountry, setCurrentCountry] = useState(getRandomCountry('beginner'));
  const [scrambledName, setScrambledName] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setCurrentCountry(getRandomCountry(difficulty));
  }, [difficulty]);

  useEffect(() => {
    setScrambledName(shuffleString(currentCountry.name));
  }, [currentCountry]);

  const handleNextCountry = () => {
    setCurrentCountry(getRandomCountry(difficulty));
    setIsCorrect(false);
  };

  const handleGuess = (guess: string) => {
    if (guess.toLowerCase() === currentCountry.name.toLowerCase()) {
      setScore(prev => prev + (difficulty === 'beginner' ? 1 : difficulty === 'intermediate' ? 2 : 3));
      setIsCorrect(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe2 className="w-12 h-12 text-indigo-600 animate-spin-slow" />
            <h1 className="text-4xl font-bold text-indigo-900">Geo Shuffle</h1>
          </div>
          <p className="text-indigo-700 text-lg">Explore the world one puzzle at a time!</p>
        </header>

        <div className="grid md:grid-cols-[1fr_300px] gap-8">
          <main className="bg-white rounded-2xl shadow-xl p-8">
            <DifficultySelector 
              currentDifficulty={difficulty} 
              onSelect={setDifficulty}
            />
            
            <GameBoard
              scrambledName={scrambledName}
              country={currentCountry}
              onGuess={handleGuess}
              isCorrect={isCorrect}
              difficulty={difficulty}
              onNext={handleNextCountry}
            />
          </main>

          <aside>
            <ScoreBoard score={score} />
            
            <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-indigo-600" />
                Quick Tips
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Study the clues carefully</li>
                <li>• Look for patterns in letters</li>
                <li>• Start with vowels</li>
                <li>• Think about geography</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;