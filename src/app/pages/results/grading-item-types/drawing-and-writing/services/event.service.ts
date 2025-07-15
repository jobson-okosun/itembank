import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, timer } from "rxjs";

export type DrawingMode = 'brush' | 'eraser';

@Injectable({ providedIn: 'root' })

export class KonvaToolsEvent { 
  private _toolMode = new Subject<DrawingMode>();
  toolMode$: Observable<DrawingMode> = this._toolMode.asObservable();

  private _activePage = new Subject<number>();
  activePage$: Observable<number> = this._activePage.asObservable();

  _openQuestionPane = new BehaviorSubject<boolean>(true);
  openQuestionPane$: Observable<boolean> = this._openQuestionPane.asObservable();

  _clearCanvas = new BehaviorSubject<boolean>(false);
  _clearCanvas$: Observable<boolean> = this._clearCanvas.asObservable();

  _gotoPage = new BehaviorSubject<boolean>(false);
  gotoPage$: Observable<boolean> = this._gotoPage.asObservable();

  _sectionChanges = new BehaviorSubject<boolean>(false);
  sectionChanges$: Observable<boolean> = this._sectionChanges.asObservable();

  _drawing_and_writing_splitMode = new Subject<string>();
  drawing_and_writing_splitMode$: Observable<string> = this._drawing_and_writing_splitMode.asObservable();

  _drawing_and_writing_layoutMode = new Subject<string>();
  drawing_and_writing_layoutMode$: Observable<string> = this._drawing_and_writing_layoutMode.asObservable();

  _backgoundTypeChange = new Subject<string>();
  backgoundTypeChange$: Observable<string> = this._backgoundTypeChange.asObservable();

  _clearCurrentPageEvent = new Subject<string>();
  clearCurrentPageEvent$: Observable<string> = this._clearCurrentPageEvent.asObservable();

  _selectDrawingTool = new Subject<'brush' | 'eraser'>();
  _selectDrawingTool$: Observable<'brush' | 'eraser'> = this._selectDrawingTool.asObservable();

  constructor() { }

  setToolMode(mode: DrawingMode): void {
    this._toolMode.next(mode);
  }

  setActivePage(page: number): void {
    this._activePage.next(page);
  }

  setQuestionPane(status: boolean): Promise<void> {
    return new Promise((resolve) => {
      this._openQuestionPane.next(status)
      timer(300).subscribe(() => resolve())
    })
  }

  setDrawingLayoutMode(mode: string): Promise<void> {
    return new Promise((resolve) => {
      this._drawing_and_writing_splitMode.next(mode)

      timer(300).subscribe(() => resolve())
    })
  }

  setSectionChanges(state: boolean): Promise<void> {
    return new Promise((resolve) => {
      this._sectionChanges.next(state)

      timer(300).subscribe(() => resolve())
    })
  }

  getOpenQuestionPaneValue() {
    return this._openQuestionPane.getValue()
  }
}