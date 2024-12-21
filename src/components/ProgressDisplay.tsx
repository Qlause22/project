import React from "react";
import { calculateProgress, formatProgress } from "../utils/stats";
import { ReviewState } from "../types/vocabulary";
import { vocabulary } from "../data/vocabulary";

interface ProgressDisplayProps {
  knownWords: number[];
  reviewWords: ReviewState;
  totalWords: number;
}

export function ProgressDisplay({
  knownWords,
  reviewWords,
  totalWords,
}: ProgressDisplayProps) {
  const progressPercentage = calculateProgress(knownWords, totalWords);
  const guessedCount = knownWords.length | 0;
  const notGuessedCount = reviewWords.reviewWords.length | 0;
  const remainingWords = (totalWords - guessedCount - notGuessedCount) | 0;

  const handleNotGuessedDownload = () => {
    let content: string = "";

    for (let i = 0; i < vocabulary.length; i++) {
      if (reviewWords.reviewWords.includes(vocabulary[i].id)) {
        content += `${vocabulary[i].word}\n`;
      }
    }

    const element = document.createElement("a");
    const file = new Blob([content], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "words.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      {/* Progress Bar with Percentage on the Right */}
      <div className="relative w-32 h-2 bg-gray-200 rounded-full overflow-visible">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
        <span className="absolute right-0 top-[-14px] px-2 pt-[7px] pb-0.5 text-sm font-medium text-gray-600 rounded">
          {formatProgress(progressPercentage)}
        </span>
      </div>

      {/* Word Counts */}
      <div className="flex items-center justify-between text-sm text-gray-600 mt-2 w-full px-4">
        <span className="flex items-center gap-1 text-green-600 font-medium mx-4">
          <span className="rounded-full w-2.5 h-2.5 bg-green-600 inline-block" />
          Guessed: {guessedCount}
        </span>
        <span
          className="flex items-center gap-1 text-red-600 font-medium mx-4 cursor-pointer hover:text-red-800 transition-colors"
          onClick={handleNotGuessedDownload}
        >
          <span className="rounded-full w-2.5 h-2.5 bg-red-600 inline-block" />
          Not Guessed: {notGuessedCount}
        </span>
        <span className="flex items-center gap-1 text-blue-600 font-medium mx-4">
          <span className="rounded-full w-2.5 h-2.5 bg-blue-600 inline-block" />
          Remaining: {remainingWords}
        </span>
      </div>
    </div>
  );
}
