export interface VocabularyCard {
  id: number;
  word: string;
  type: 'noun' | 'verb' | 'adjective' | 'adverb';
  difficulty: 'easy' | 'hard';
}

export interface ReviewState {
  knownWords: number[];
  reviewWords: number[];
  currentRound: number;
}