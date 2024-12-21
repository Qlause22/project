import React from "react";
import { X, Check } from "lucide-react";
import { Badge } from "./Badge";
import type { VocabularyCard } from "../data/vocabulary";

interface CardProps extends VocabularyCard {
  onSwipe: (direction: "left" | "right") => void;
}

export function Card({ word, type, difficulty, onSwipe }: CardProps) {
  return (
    <div className="w-[400px] h-[450px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <h2 className="text-4xl font-bold text-gray-800 text-center font-serif break-words">
          {word}
        </h2>
      </div>
      <div className="p-6 bg-white">
        <div className="flex gap-2 mb-4">
          <Badge variant={type}>{type}</Badge>
          <Badge variant={difficulty}>{difficulty}</Badge>
        </div>
        <div className="flex justify-center gap-6">
          <button
            onClick={() => onSwipe("left")}
            className="w-14 h-14 bg-white border-2 border-red-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <X className="w-8 h-8 text-red-500" />
          </button>
          <button
            onClick={() => onSwipe("right")}
            className="w-14 h-14 bg-white border-2 border-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <Check className="w-8 h-8 text-green-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
