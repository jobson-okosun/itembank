import { Injectable } from '@angular/core';
// import SecureLS from 'secure-ls';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SecureStorageService {
  private _environment = environment;

  setItem(key: string, data: any): void {
    try {
      const stringifiedData = JSON.stringify(data);

      const encryptedData = CryptoJS.AES.encrypt(
        stringifiedData,
        this._environment.ecureStorageKey
      ).toString();

      localStorage.setItem(key, encryptedData);
    } catch (e) {
      console.error('Error setting item to secure storage:', e);
    }
  }

  getItem<T>(key: string): T | null {
    try {
      const encryptedData = localStorage.getItem(key);

      if (encryptedData === null) {
        return null;
      }

      const decryptedBytes = CryptoJS.AES.decrypt(
        encryptedData,
        this._environment.ecureStorageKey
      );
      const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);

      return JSON.parse(decryptedData) as T;
    } catch (e) {
      console.error('Error getting item from secure storage:', key, e);
      return null;
    }
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  getAllKeys(): string[] {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        keys.push(key);
      }
    }
    return keys;
  }

  clear(): void {
    localStorage.clear();
  }

  // private ls: SecureLS;
  // constructor() {
  //   this.ls = new SecureLS({ encodingType: 'aes', isCompression: true });
  // }
  // setItem(key: string, data: any): void {
  //   this.ls.set(key, data);
  // }
  // getItem<T>(key: string): T | null {
  //   try {
  //     return this.ls.get(key) as T;
  //   } catch (e) {
  //     console.error('Failed to get item:', key, e);
  //     return null;
  //   }
  // }
  // removeItem(key: string): void {
  //   this.ls.remove(key);
  // }
  // getAllKeys(): string[] {
  //   return this.ls.getAllKeys();
  // }
  // clear(): void {
  //   this.ls.removeAll();
  // }
}
