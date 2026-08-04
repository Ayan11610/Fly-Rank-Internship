export function cn(...inputs: (string | undefined | null | boolean | Record<string, boolean>)[]) {
  return inputs
    .filter(Boolean)
    .map((item) => {
      if (typeof item === "string") return item;
      if (typeof item === "object" && item !== null) {
        return Object.entries(item)
          .filter(([_, value]) => value)
          .map(([key]) => key)
          .join(" ");
      }
      return "";
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}
