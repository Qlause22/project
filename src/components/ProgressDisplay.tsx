import React from 'react';
import { calculateProgress, formatProgress } from '../utils/stats';

interface ProgressDisplayProps {
  knownWords: number[];
  totalWords: number;
}

export function ProgressDisplay({ knownWords, totalWords }: ProgressDisplayProps) {
  const progressPercentage = calculateProgress(knownWords, totalWords);

  return (
    <div className="flex items-center gap-2">
      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <span className="text-sm font-medium text-gray-600">
        {formatProgress(progressPercentage)}
      </span>
    </div>
  );
}