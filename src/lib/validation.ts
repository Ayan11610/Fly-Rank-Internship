export function validateCodeSize(code: string, maxSize = 50000): { valid: boolean; error?: string } {
  if (!code || code.trim() === "") {
    return { valid: false, error: "Code content cannot be empty." };
  }
  if (code.length > maxSize) {
    return {
      valid: false,
      error: `Code content exceeds maximum allowed size of ${maxSize} characters.`,
    };
  }
  return { valid: true };
}

export function validateFileType(filename: string, allowedExtensions = ["js", "jsx", "ts", "tsx", "py", "go", "java"]): boolean {
  const ext = filename.split(".").pop()?.toLowerCase();
  return ext ? allowedExtensions.includes(ext) : false;
}
