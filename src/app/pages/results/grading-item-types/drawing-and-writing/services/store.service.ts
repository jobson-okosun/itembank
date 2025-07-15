import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Page, Store, Strokes } from '../model/store.model'

@Injectable({ providedIn: 'root' })
export class DrawingAndWritingStore {
  private _store = new BehaviorSubject<Store>({
    currentPage: 0,
    pages: [],
    shouldReset: false
  });

  store$ = this._store.asObservable();

  constructor() {
    this.createNewPage();
  }

  getStoreData(): Store {
    const store = this._store.getValue();
    return store;
  }

  updateStore(update: Partial<Store>) {
    const store = this.getStoreData();
    this._store.next({ ...store, ...update });
  }

  updateStoreCurrentPage(currentPage: number) {
    const store = this.getStoreData();

    if (currentPage >= 0 && currentPage < store.pages.length) {
      this._store.next({ ...store, currentPage });
    } 
  }

  getCurrentPageData(): Page {
    const store = this.getStoreData();

    return store.pages[store.currentPage];
  }

  createNewPage() {
    const store = this.getStoreData();
    const newPageNumber = store.pages.length + 1; // Logical page number
    const newPage = new Page(newPageNumber);

    const updatedPages = [...store.pages, newPage];

    // Set the new current page to the index of the newly created page
    const newCurrentPage = updatedPages.length - 1;

    this.updateStore({ currentPage: newCurrentPage, pages: updatedPages });
  }

  deleteCurrentPage() {
    const store = this.getStoreData();
    let { currentPage, pages } = store;

    if (pages.length === 1) {
      return;
    }

    const updatedPages = pages.filter((_, index) => index !== currentPage);

    // Determine the new current page index
    let newCurrentPageIndex: number;

    if (updatedPages.length === 0) {
      newCurrentPageIndex = 0;
    } else if (currentPage > 0 && currentPage === pages.length - 1) {
      newCurrentPageIndex = updatedPages.length - 1;
    } else {
      newCurrentPageIndex = currentPage;
    }

    // Re-index the page numbers
    const reIndexedPages = updatedPages.map((page, index) => {
      page.page = index + 1;
      return page;
    });

    this.updateStore({ currentPage: newCurrentPageIndex, pages: reIndexedPages });
  }

  selectPage(pageIndex: number) {
    this.updateStoreCurrentPage(pageIndex)

    const pageData = this.getCurrentPageData()
    return pageData
  }

  updateCurrentPageStrokes(stroke: Strokes[], shouldReset?: boolean) {
    const store = this.getStoreData();
    const currentPageIndex = store.currentPage;

    const updatedPages = store.pages.map((page, index) => {
      if (index === currentPageIndex) {
        return { ...page, strokes: [...stroke] };
      }
      return page;
    });
    this.updateStore({ pages: updatedPages, shouldReset });

    // console.log('test data = > ', JSON.stringify({ stroke: stroke }))
  }

  clearStoreData(): void {
     const newStore = new Store()
     newStore.shouldReset = true;

     this._store.next(newStore)
  }
}