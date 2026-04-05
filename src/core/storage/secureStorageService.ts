/**
 * Secure storage wrapper (simplified for browser).
 * In a production app, you might use AES encryption (e.g. CryptoJS) before storing.
 */
import { encryptionService } from '../utils/encryptionService';

export const secureStorageService = {
  setItem(key: string, value: any): void {
    const stringValue = JSON.stringify(value);
    const encryptedValue = encryptionService.encrypt(stringValue);
    localStorage.setItem(key, encryptedValue);
  },

  getItem<T>(key: string): T | null {
    const encryptedValue = localStorage.getItem(key);
    if (!encryptedValue) return null;
    
    try {
      const decryptedValue = encryptionService.decrypt(encryptedValue);
      return JSON.parse(decryptedValue) as T;
    } catch (e) {
      console.error('Failed to decrypt secure storage item', e);
      return null;
    }
  },

  removeItem(key: string): void {
    localStorage.removeItem(key);
  },

  clear(): void {
    localStorage.clear();
  },
};
