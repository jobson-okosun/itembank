import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContextMenuGradingForm, Page, Store, Strokes } from '../model/store.model'
import { SchemeMarkCategory } from 'src/app/pages/assessment/model/marking-guide-types';

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

    const updatedPages = store.pages?.map((page, index) => {
      if (index === currentPageIndex) {
        return { ...page, strokes: [...stroke] };
      }
      return page;
    });

    this.updateStore({ pages: updatedPages, shouldReset });
  }

  addradingFormToCurrentPageContextMenu(grading: ContextMenuGradingForm) {
    const store = this.getStoreData();
    const currentPageIndex = store.currentPage;

    const updatedPages = store.pages?.map((page, index) => {
      if (index === currentPageIndex) {
        return { ...page, grading: [...page?.grading, grading] };
      }

      return page;
    });

    this.updateStore({ pages: updatedPages });
  }

  async expandGradingFormContextMenuItem(formItemIndex: number) {
    const store = this.getStoreData();
    const currentPageIndex = store.currentPage;

    const updatedPages = store.pages?.map((page, index) => {
      if (index === currentPageIndex) {
        try {
          page.grading[formItemIndex].isOpen = true
        } catch (e) { }
        return page
      }

      return page;
    });

    this.updateStore({ pages: updatedPages });
  }

  collapseGradingFormContextMenuItems() {
    const store = this.getStoreData();

    const validTypes: Array<SchemeMarkCategory.SCORE | SchemeMarkCategory.PENALTY | SchemeMarkCategory.VIOLATION> = Object.values(SchemeMarkCategory);

    const updatedPages = store.pages?.map(page => {
      // Filter out invalid placeholderTypes
      const filteredGrading = page.grading
        .map(item => {
          if (validTypes.includes(item.placeholderType as any)) {
            return { ...item, isOpen: false }; // collapse valid ones
          }
          return null; // mark invalid
        })
        .filter((item): item is ContextMenuGradingForm => item !== null); // remove invalids

      return { ...page, grading: filteredGrading };
    });

    this.updateStore({ pages: updatedPages });
  }

  async updateGradingFormContextMenuItemPosition(position: number[], formItemIndex: number) {
    const store = this.getStoreData();
    const currentPageIndex = store.currentPage;

    const updatedPages = store.pages?.map((page, index) => {
      if (index === currentPageIndex) {
        page.grading[formItemIndex].position = position
        return page
      }

      return page;
    });

    this.updateStore({ pages: updatedPages });
  }

  async collapseGradingFormContextMenuItem(formItemIndex: number) {
    const store = this.getStoreData();
    const currentPageIndex = store.currentPage;

    const updatedPages = store.pages?.map((page, index) => {
      if (index === currentPageIndex) {
        const targetItem = page.grading[formItemIndex];

        // Check if placeholderType is valid
        const validTypes: Array<SchemeMarkCategory.SCORE | SchemeMarkCategory.PENALTY | SchemeMarkCategory.VIOLATION> = Object.values(SchemeMarkCategory);
        const isValid = targetItem && validTypes.includes(targetItem.placeholderType as any);

        let updatedGrading;

        if (isValid) {
          // Just collapse (keep item)
          updatedGrading = page.grading.map((item, i) =>
            i === formItemIndex ? { ...item, isOpen: false } : item
          );
        } else {
          // Remove item completely
          updatedGrading = page.grading.filter((_, i) => i !== formItemIndex);
        }

        return { ...page, grading: updatedGrading };
      }
      return page;
    });

    this.updateStore({ pages: updatedPages });
  }


  async deleteGradingFormContextMenuItem(formItemIndex: number) {
    const store = this.getStoreData();
    const currentPageIndex = store.currentPage;

    const updatedPages = store.pages?.map((page, index) => {
      if (index === currentPageIndex) {
        const updatedGrading = page.grading.filter((_, i) => i !== formItemIndex);
        return { ...page, grading: updatedGrading };
      }
      return page;
    });

    this.updateStore({ pages: updatedPages });
  }

  async updateGradingFormContextMenuItemVersion(formItemIndex: number) {
    const store = this.getStoreData();
    const currentPageIndex = store.currentPage;

    const updatedPages = store.pages?.map((page, index) => {
      if (index === currentPageIndex) {
        page.grading[formItemIndex].versioned = true
        page.grading[formItemIndex].isOpen = false
        return page
      }

      return page;
    });

    this.updateStore({ pages: updatedPages });
  }


  async updateGradingFormContextMenuItemPlaceholder(
    formItemIndex: number,
    update: {
      scoreId: string,
      placeholderCode: string,
      placeholderType: SchemeMarkCategory.SCORE | SchemeMarkCategory.PENALTY | SchemeMarkCategory.VIOLATION,
    }) {
    const store = this.getStoreData();
    const currentPageIndex = store.currentPage;

    const updatedPages = store.pages?.map((page, index) => {
      if (index === currentPageIndex) {
        page.grading[formItemIndex].placeholderCode = update.placeholderCode
        page.grading[formItemIndex].placeholderType = update.placeholderType
        page.grading[formItemIndex].scoreId = update.scoreId
        return page
      }

      return page;
    });

    this.updateStore({ pages: updatedPages });
  }


  clearStoreData(): void {
    const newStore = new Store()
    newStore.shouldReset = true;

    this._store.next(newStore)
  }
}