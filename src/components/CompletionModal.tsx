import React from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

interface CompletionModalProps {
  allWordsGuessed: boolean;
  onStartReview: () => void;
  onReset: () => void;
}

export function CompletionModal({
  allWordsGuessed,
  onStartReview,
  onReset,
}: CompletionModalProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-center p-8 bg-white rounded-2xl shadow-xl"
    >
      {allWordsGuessed ? (
        <>
          <motion.h2
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-2xl font-bold text-gray-800 mb-4"
          >
            🎉 Congratulations! 🎉
          </motion.h2>
          <p className="text-gray-600 mb-6">
            You've successfully learned all the vocabulary!
          </p>
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            <RotateCcw className="w-4 h-4" />
            Start Over
          </button>
        </>
      ) : (
        <button
          onClick={onStartReview}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          <RotateCcw className="w-4 h-4" />
          Next Round
        </button>
      )}
    </motion.div>
  );
}
