import React from "react";
import { Card } from "./components/Card";
import { CompletionModal } from "./components/CompletionModal";
import { ProgressHistory } from "./components/ProgressHistory";
import { GameHeader } from "./components/GameHeader";
import { useVocabularyGame } from "./hooks/useVocabularyGame";

export default function App() {
  const {
    gameState: {
      currentIndex,
      progressHistory,
      reviewState,
      currentDeck,
      isComplete,
      allWordsGuessed,
      currentRoundKnownWords,
    },
    handlers: { handleSwipe, handleStartReview, handleReset },
  } = useVocabularyGame();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col items-center">
      <GameHeader
        currentRound={reviewState.currentRound}
        currentRoundKnownWords={currentRoundKnownWords}
        reviewState={reviewState}
        deckSize={currentDeck.length}
      />

      {!isComplete ? (
        <Card
          key={currentDeck[currentIndex].id}
          {...currentDeck[currentIndex]}
          onSwipe={handleSwipe}
        />
      ) : (
        <CompletionModal
          allWordsGuessed={allWordsGuessed}
          onStartReview={handleStartReview}
          onReset={handleReset}
        />
      )}
      {!allWordsGuessed ? (
        progressHistory.length > 0 && (
          <ProgressHistory rounds={progressHistory} />
        )
      ) : (
        <div></div>
      )}
    </div>
  );
}
