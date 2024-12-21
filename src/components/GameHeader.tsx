import React from "react";
import { ProgressDisplay } from "./ProgressDisplay";
import { Upload } from "lucide-react";

interface GameHeaderProps {
  currentRound: number;
  currentRoundKnownWords: number[];
  deckSize: number;
}

export function GameHeader({
  currentRound,
  currentRoundKnownWords,
  deckSize,
}: GameHeaderProps) {
  // Function to handle file input
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      console.log("File uploaded:", file.name); // You might want to process the file here
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-full mt-8 mb-4">
        <div className="flex justify-center items-center space-x-4">
          <h1 className="text-3xl font-bold text-gray-800">
            Vocabulary Cards
            {currentRound > 1 && (
              <span className="text-sm text-gray-600">
                Round {currentRound}
              </span>
            )}
          </h1>
          <label htmlFor="file-upload" className="cursor-pointer">
            <Upload
              className="text-gray-600 hover:text-gray-800 transition-colors"
              size={24}
            />
            <input
              id="file-upload"
              type="file"
              accept=".pdf"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
          </label>
        </div>
      </div>

      <div className="mb-8">
        <ProgressDisplay
          knownWords={currentRoundKnownWords}
          totalWords={deckSize}
        />
      </div>
    </>
  );
}
