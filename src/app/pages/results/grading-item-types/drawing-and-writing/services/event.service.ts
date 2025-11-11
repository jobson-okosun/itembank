import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject} from "rxjs";

export type DrawingMode = 'brush' | 'eraser';

@Injectable({ providedIn: 'root' })

export class KonvaToolsEvent { 
  _pageSelectEvent = new Subject<boolean>();
  _questionChanged$ = new Subject<boolean>();
  _resizeCanvas$ = new Subject<boolean>();
  openQuestionPane$ = new Subject<boolean>();
  _selectMeasurementTool$ = new BehaviorSubject<string | null>(null);
  _removeMeasurementTool$ = new BehaviorSubject<string | null>(null);
  backgroundChange$ = new BehaviorSubject<string | null>(null);

} 