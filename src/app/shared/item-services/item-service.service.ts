import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ItemServiceService {
  items: any[] = [];
  passages: any[] = [];

  constructor() {
    this.getItems(); //.subscribe(item => this.items = item);
  }

  getItem(key: string, fallback = null): string | null {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    }
    catch (error) {
      return fallback;
    }
  }

  setItem(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    }
    catch (error) {
      if (error.name === "QuotaExceededError") {
        console.error("LocalStorage quota exceeded!");
      }
    }
  }

  clearItem(key: string): void {
    try {
      localStorage.removeItem(key);
    }
    catch (error) {
      console.error("Error clearing item from LocalStorage:", error);
    }
  }

  getItems() {
    return this.items;
  }

  getPassages() {
    return this.passages;
  }

  getPassage(id: string) {
    let passage = this.items.filter((item) => {
      return (item.passageId = id);
    });
    return passage;
  }

  addItem(data: any) {
    this.items.push(data);
  }

  addPassage(data: any) {
    this.passages.push(data);
  }
}

export interface items {
  reference: string;
  stimulus: string;
  tags: string[];
  itemType: string;
}
