import React from "react";

interface ProgressHistoryProps {
  rounds: { round: number; percentage: number }[];
}

export function ProgressHistory({ rounds }: ProgressHistoryProps) {
  // Only render the container if there are rounds to display
  if (rounds.length === 0) {
    return null;
  }

  return (
    <div className="w-full mt-6 px-4 py-2">
      <div className="max-w-2xl mx-auto space-y-2">
        {rounds.map(({ round, percentage }) => (
          <div
            key={round}
            className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-md"
            aria-label={`Round ${round} progress: ${percentage}% complete`}
          >
            <p className="text-sm font-medium text-gray-700">
              Round {round}:{" "}
              <span className="text-indigo-600">{percentage}%</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
