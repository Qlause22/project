export function calculateProgress(knownWords: number[], totalWords: number) {
  if (totalWords === 0) return 0;
  return Math.round((knownWords.length / totalWords) * 100);
}

export function formatProgress(percentage: number): string {
  return `${percentage}%`;
}