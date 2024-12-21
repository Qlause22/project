export interface VocabularyCard {
  id: number;
  word: string;
  type: 'noun' | 'verb' | 'adjective' | 'adverb';
  difficulty: 'easy' | 'hard';
}

export const vocabulary: VocabularyCard[] = [
  {
    id: 1,
    word: "Ephemeral",
    type: "adjective",
    difficulty: "hard"
  },
  {
    id: 2,
    word: "Serendipity",
    type: "noun",
    difficulty: "hard"
  },
  {
    id: 3,
    word: "Mellifluous",
    type: "adjective",
    difficulty: "hard"
  },
  {
    id: 4,
    word: "Ubiquitous",
    type: "adjective",
    difficulty: "hard"
  },
  {
    id: 5,
    word: "Eloquent",
    type: "adjective",
    difficulty: "easy"
  }
];