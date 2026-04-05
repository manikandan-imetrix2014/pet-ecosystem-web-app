// Simple base64 mock encryption for demonstration. 
// In a real production app, use CryptoJS (AES) with an environment-specific key.
export const encryptionService = {
  encrypt(text: string): string {
    return btoa(text);
  },

  decrypt(encodedText: string): string {
    try {
      return atob(encodedText);
    } catch (e) {
      console.error('Decryption failed', e);
      return '';
    }
  },
};
