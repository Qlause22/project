import { VocabularyCard } from '../types/vocabulary';

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function getRemainingWords(
  vocabulary: VocabularyCard[],
  knownWords: number[]
): VocabularyCard[] {
  return vocabulary.filter(card => !knownWords.includes(card.id));
}

export function getReviewWords(
  vocabulary: VocabularyCard[],
  reviewWords: number[]
): VocabularyCard[] {
  return vocabulary.filter(card => reviewWords.includes(card.id));
}