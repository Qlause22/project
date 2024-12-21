import { useState, useCallback } from "react";
import { vocabulary } from "../data/vocabulary";
import {
  getRemainingWords,
  getReviewWords,
  shuffleArray,
} from "../utils/vocabulary";
import { calculateProgress } from "../utils/stats";
import type { ReviewState } from "../types/vocabulary";

export interface GameState {
  currentIndex: number;
  progressHistory: Array<{ round: number; percentage: number }>;
  reviewState: ReviewState;
  currentDeck: typeof vocabulary;
  isComplete: boolean;
  allWordsGuessed: boolean;
  currentRoundKnownWords: number[];
}

export function useVocabularyGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressHistory, setProgressHistory] = useState<
    Array<{ round: number; percentage: number }>
  >([]);
  const [currentRoundKnownWords, setCurrentRoundKnownWords] = useState<
    number[]
  >([]);
  const [reviewState, setReviewState] = useState<ReviewState>({
    knownWords: [],
    reviewWords: [],
    currentRound: 1,
  });

  const [currentDeck, setCurrentDeck] = useState(() =>
    shuffleArray(getRemainingWords(vocabulary, []))
  );

  const handleSwipe = useCallback(
    (direction: "left" | "right") => {
      const currentWord = currentDeck[currentIndex];

      if (direction === "right") {
        setReviewState((prev) => ({
          ...prev,
          knownWords: [...prev.knownWords, currentWord.id],
        }));
        setCurrentRoundKnownWords((prev) => [...prev, currentWord.id]);
      } else {
        setReviewState((prev) => ({
          ...prev,
          reviewWords: [...prev.reviewWords, currentWord.id],
        }));
      }
      console.log(currentIndex, currentDeck);
      if (currentIndex >= currentDeck.length) {
        setProgressHistory([]);
      }
      setCurrentIndex((prev) => prev + 1);
    },
    [currentDeck, currentIndex]
  );

  const handleStartReview = useCallback(() => {
    const currentProgress = calculateProgress(
      currentRoundKnownWords,
      currentDeck.length
    );
    setProgressHistory((prev) => [
      {
        round: reviewState.currentRound,
        percentage: currentProgress,
      },
      ...prev,
    ]);

    const reviewWords = getReviewWords(
      getRemainingWords(vocabulary, reviewState.knownWords),
      reviewState.reviewWords
    );
    setCurrentDeck(shuffleArray(reviewWords));
    setCurrentIndex(0);
    setCurrentRoundKnownWords([]); // Reset progress for new round
    setReviewState((prev) => ({
      ...prev,
      currentRound: prev.currentRound + 1,
      reviewWords: [],
    }));
  }, [
    currentRoundKnownWords,
    currentDeck.length,
    reviewState.currentRound,
    reviewState.knownWords,
    reviewState.reviewWords,
  ]);

  const handleReset = useCallback(() => {
    setCurrentDeck(shuffleArray(vocabulary));
    setCurrentIndex(0);
    setProgressHistory([]);
    setCurrentRoundKnownWords([]);
    setReviewState({
      knownWords: [],
      reviewWords: [],
      currentRound: 1,
    });
  }, []);

  const isComplete = currentIndex >= currentDeck.length;
  const allWordsGuessed = reviewState.knownWords.length === vocabulary.length;

  return {
    gameState: {
      currentIndex,
      progressHistory,
      reviewState,
      currentDeck,
      isComplete,
      allWordsGuessed,
      currentRoundKnownWords,
    },
    handlers: {
      handleSwipe,
      handleStartReview,
      handleReset,
    },
  };
}
