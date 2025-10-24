export const splitParagraph = (text: string | undefined, wordsPerLine: number = 12, lines: number = 5) => {
  const words = (text ?? "").split(" ");
  const firstPart = words.slice(0, wordsPerLine * lines).join(" ");
  const secondPart = words.slice(wordsPerLine * lines).join(" ");
  return [firstPart, secondPart];
};
