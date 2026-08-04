export function generateRandomId(prefix = "id"): string {
  return `${prefix}_${Math.random().toString(36).substring(2, 9)}`;
}

export function truncateText(text: string, length = 100): string {
  if (text.length <= length) return text;
  return `${text.substring(0, length)}...`;
}
