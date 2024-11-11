import React from 'react';
import { Difficulty } from '../types';

interface DifficultySelectorProps {
  currentDifficulty: Difficulty;
  onSelect: (difficulty: Difficulty) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  currentDifficulty,
  onSelect,
}) => {
  return (
    <div className="mb-8">
      <div className="flex gap-2">
        {(['beginner', 'intermediate', 'advanced'] as Difficulty[]).map((diff) => (
          <button
            key={diff}
            onClick={() => onSelect(diff)}
            className={`px-4 py-2 rounded-lg capitalize transition-all ${
              currentDifficulty === diff
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {diff}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DifficultySelector;