import React from 'react';
import { Trophy } from 'lucide-react';

interface ScoreBoardProps {
  score: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Your Score</h2>
        <Trophy className="w-6 h-6 text-yellow-500" />
      </div>
      
      <div className="text-center">
        <p className="text-4xl font-bold text-indigo-600">{score}</p>
        <p className="text-gray-600 mt-1">points</p>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Next Milestone</h3>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(score % 10) * 10}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;