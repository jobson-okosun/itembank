import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { KonvaDrawingService } from './services/konva.service';
import { ItemUtilitiesService } from '../item-utilities.service';
import { DrawAndWritingModel } from '../drawing-and-writing/model/drawing-and-writing..model';
import { UserService } from 'src/app/shared/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Account } from 'src/app/authentication/model/account.model';
import { ItemHttpService } from '../item-http.service';
import { RecycleService } from '../../recycle/recycle.service';
import { Router } from '@angular/router';
import { UsageHistory } from '../models/usage-history';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { AllPassagesService } from '../../passages/list-passages/all-passages.service';
import { NotifierService } from 'angular-notifier';
import { PerfectFreehandKonvaDrawingService } from './services/perfect-freehand.konva';

@Component({
  selector: 'app-drawing-and-writing-preview',
  templateUrl: './drawing-and-writing-preview.component.html',
  styleUrls: ['./drawing-and-writing-preview.component.scss'],
})
export class DrawingAndWritingPreviewComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  private _currentTool: 'brush' | 'eraser' = 'brush';
  private _selectedGridType: string = 'NONE';

  @Input() previewData: DrawAndWritingModel | any;
  @Input() component!: string;
  @Input() itemTrailInfo: any;
  @Output() returnPreviewData = new EventEmitter();
  @Output() reload = new EventEmitter();

  private recycleService: RecycleService;
  currentUser: Account;
  assessmentActive: boolean = false;
  recycleComponentActive: boolean = false;
  isEditPreview: boolean = false;
  subjectName: string = '';
  selectedItemId!: string;
  processing_delete: boolean = false;
  modalRef: any;
  itemUsageHistory: UsageHistory[] = [];
  loading_usage_history: boolean = false;
  containerSize = 500;
  canvasSize = 1000
  
  constructor( 
    private konvaDrawingService: KonvaDrawingService,
    private konvaFreehandDrawing: PerfectFreehandKonvaDrawingService,
    private itemUtil: ItemUtilitiesService,
    private userService: UserService,
    private modalService: NgbModal,
    private itemService: ItemHttpService,
    private router: Router,
    private passageService: AllPassagesService,
    private notifier: NotifierService,
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.assessmentActive = this.itemService.assessmentActive;
    this.recycleComponentActive = this.recycleService?.recycleActive;
    this.isEditPreview = this.router.url.includes('edit-item');
    this.subjectName = this.itemService.subjectName;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event): void {
    const canvasContainer = document.getElementById('canvas');
    const width = canvasContainer.offsetWidth;
    const height = canvasContainer.offsetHeight;

     this.useDrawingService().resizeStage(width, height, this.containerSize);
  }

  ngAfterViewInit(): void {
    const canvasContainer = document.getElementById('canvas');
    if (canvasContainer) {
      const width = canvasContainer.offsetWidth;

       this.useDrawingService().initialize('canvas', width, this.canvasSize, this.containerSize);
       this.useDrawingService().mode = this._currentTool;
       this.useDrawingService().gridType = this.previewData.backgroundType;
    } else {
       this.useDrawingService().initialize('canvas', 800, this.canvasSize, this.containerSize);
       this.useDrawingService().mode = this._currentTool;
       this.useDrawingService().gridType = this.previewData.backgroundType;
    }
  }

  useDrawingService(type: string = 'perfect-freehand'): KonvaDrawingService | PerfectFreehandKonvaDrawingService {
    if(type == 'perfect-freehand') {
      return this.konvaFreehandDrawing
    }

    return this.konvaDrawingService
  }

  edit() {
    this.itemUtil.previewItem = false;
    if (this.previewData.id) {
      this.returnPreviewData.emit(this.previewData);
      this.router.navigate(
        ['/examalpha/subjects/' + this.subjectName + '/edit-item'],
        {
          queryParams: {
            type: `${this.previewData.type}`,
            id: `${this.previewData.id}`,
          },
        }
      );
    } else {
      this.returnPreviewData.emit(this.previewData);
    }
  }

  ngOnDestroy(): void {
     this.useDrawingService().destroy();
  }

  get CurrentTool(): 'brush' | 'eraser' {
    return this._currentTool;
  }

  set CurrentTool(value: 'brush' | 'eraser') {
    this._currentTool = value;
    if ( this.useDrawingService()) {
       this.useDrawingService().mode = value;
    }
  }

  get selectedGridType(): string {
    return this._selectedGridType;
  }

  set selectedGridType(value: string) {
    this._selectedGridType = value;
    if ( this.useDrawingService()) {
       this.useDrawingService().gridType = value;
    }
  }

  getRange(size: number): number[] {
    return Array.from({ length: size }, (_, i) => i);
  }

  clearCanvas(): void {
     this.useDrawingService().clearDrawing();
  }

  openDeleteItemModal(deleteConfirmationModal: any, itemId: any) {
    this.selectedItemId = itemId;
    this.modalRef = this.modalService.open(deleteConfirmationModal, {
      centered: true,
      size: 'md',
    });
  }

  openDeletePassageItemModal(
    deletePassageQuestionConfirmationModal: any,
    itemId: any
  ) {
    this.selectedItemId = itemId;
    this.modalRef = this.modalService.open(
      deletePassageQuestionConfirmationModal,
      {
        centered: true,
        size: 'md',
      }
    );
  }

  deleteItem() {
    this.processing_delete = true;
    this.itemService.deleteItem(this.selectedItemId).subscribe(
      (value) => {
        if (value) {
          Swal.fire({
            icon: 'success',
            title: 'Congratulations',
            text: 'The item was deleted successfully!',
          });
          this.refresh();
        }

        this.processing_delete = false;
        this.modalService.dismissAll();
      },
      (error: HttpErrorResponse) => {
        Swal.fire({
          icon: 'error',
          title: 'Failed!',
          text: `${error.error.message}`,
        });
        this.processing_delete = false;
        this.modalService.dismissAll();
      }
    );
  }

  refresh() {
    this.reload.emit();
  }

  deletePassageItem() {
    this.processing_delete = true;
    this.passageService
      .deletePassageItem(this.selectedItemId, this.previewData.passageId)
      .subscribe(
        (value) => {
          Swal.fire({
            title: 'Congratulations!',
            text: 'You have successfully deleted the selected question.',
            icon: 'success',
          });
          /* this.passage.items = this.passage.items.filter(
            (item) => item.id !== this.selectedItemId
          ); */
          this.processing_delete = false;
          this.refresh();
          this.modalService.dismissAll();
          //this.ngOnInit();
        },
        (error: HttpErrorResponse) => {
          this.processing_delete = false;
          Swal.fire({
            title: 'Failed!',
            text: `${error.error.message}`,
            icon: 'error',
          });
        }
      );
  }

  openUsageHistoryModal(itemUsageModal: any, itemId: string) {
    this.loading_usage_history = true;
    this.modalService.open(itemUsageModal, {
      centered: true,
      size: 'md',
    });
    this.itemService.fetchItemUsageCount(itemId).subscribe(
      (value) => {
        if (value) {
          this.itemUsageHistory = value;
          this.loading_usage_history = false;
        }
      },
      (error: HttpErrorResponse) => {
        this.loading_usage_history = false;
        this.notifier.notify('error', error.error.message);
      }
    );
  }

  urlIsUserSettingsPage() {
    const url = this.router.url

    return url.includes('users/view')
  }
}
