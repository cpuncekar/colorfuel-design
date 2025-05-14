/**
 * Determines if a color is light or dark
 * @param hexColor - The hex color code
 * @returns boolean - true if the color is light, false if dark
 */
export const isLightColor = (hexColor: string): boolean => {
  // Remove the # if it exists
  const hex = hexColor.replace('#', '');
  
  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Calculate perceived brightness using the formula
  // (0.299*R + 0.587*G + 0.114*B)
  const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
  
  // Return true if the color is light (brightness > 155)
  return brightness > 155;
};

/**
 * Generates a contrasting text color (black or white) based on background color
 * @param hexColor - The hex color code of the background
 * @returns string - "#000000" for dark text or "#FFFFFF" for light text
 */
export const getContrastColor = (hexColor: string): string => {
  return isLightColor(hexColor) ? '#000000' : '#FFFFFF';
};

/**
 * Copies text to clipboard
 * @param text - The text to copy
 */
export const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};