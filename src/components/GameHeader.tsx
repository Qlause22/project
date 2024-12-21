import React from 'react';
import { ProgressDisplay } from './ProgressDisplay';

interface GameHeaderProps {
  currentRound: number;
  currentRoundKnownWords: number[];
  deckSize: number;
}

export function GameHeader({ currentRound, currentRoundKnownWords, deckSize }: GameHeaderProps) {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mt-8 mb-4">
        Vocabulary Cards
        {currentRound > 1 && (
          <span className="ml-2 text-sm text-gray-600">Round {currentRound}</span>
        )}
      </h1>
      
      <div className="mb-8">
        <ProgressDisplay 
          knownWords={currentRoundKnownWords} 
          totalWords={deckSize}
        />
      </div>
    </>
  );
}