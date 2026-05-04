import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FAVICON_DIMENSION,
  ICON_DIMENSION,
  IMAGE_MAX_SIZE_KB,
  LOGO_DIMENSION,
  VALID_IMAGE_TYPES,
} from 'src/app/core/constants/file.constant';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss'],
})
export class BrandingComponent implements OnInit {
  selectedLogoFile: File | null = null;
  selectedIconFile: File | null = null;
  selectedFaviconFile: File | null = null;

  public selectedLogoFilePreview: string | ArrayBuffer | null = null;
  public selectedIconFilePreview: string | ArrayBuffer | null = null;
  public selectedFaviconFilePreview: string | ArrayBuffer | null = null;

  public selectedLogoFileErrorMessage: string | null = null;
  public selectedIconFileErrorMessage: string | null = null;
  public selectedFaviconFileErrorMessage: string | null = null;

  @ViewChild('logoFile') logoFileInput: ElementRef;
  @ViewChild('iconFile') iconFileInput: ElementRef;
  @ViewChild('faviconFile') faviconFileInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onLogoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedLogoFileErrorMessage = null;
    if (input.files && input.files[0]) {
      const file = input.files[0];

      this.selectedLogoFile = file;

      // Validate file type
      if (!VALID_IMAGE_TYPES.includes(file.type)) {
        this.selectedLogoFileErrorMessage = `Please choose a JPEG, PNG, GIF, or SVG file.`;
        this.logoFileInput.nativeElement.value = '';
        this.selectedLogoFilePreview = null;
        this.selectedLogoFile = null;
        console.log('Selected logo file:', file);
        return;
      }

      // Validate file size (max 100kb)
      if (file.size > IMAGE_MAX_SIZE_KB) {
        this.selectedLogoFileErrorMessage = `File size exceeds 100KB limit.`;
        this.logoFileInput.nativeElement.value = '';
        this.selectedLogoFilePreview = null;
        this.selectedLogoFile = null;
        console.log('Selected logo file:', file);
        return;
      }

      // Validate image dimension and preview
      this.validateLogoDimensionAndPreview(file);
    }
  }

  validateLogoDimensionAndPreview(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      const img = new Image();
      img.src = reader.result as string;

      img.onload = () => {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        if (
          width > LOGO_DIMENSION.innerWidth ||
          height > LOGO_DIMENSION.innerHeight
        ) {
          this.selectedLogoFileErrorMessage = `Image dimension exceed ${LOGO_DIMENSION.innerWidth} X ${LOGO_DIMENSION.innerHeight}. Current dimension is ${width} X ${height}.`;
          this.logoFileInput.nativeElement.value = '';
          this.selectedLogoFile = null;
          this.selectedLogoFilePreview = null;
          return;
        } else {
          this.selectedLogoFilePreview = reader.result;
        }

        img.onerror = () => {
          this.selectedLogoFileErrorMessage =
            'Could not read image dimensions.';
          this.logoFileInput.nativeElement.value = '';
          this.selectedLogoFile = null;
          this.selectedLogoFilePreview = null;
          return;
        };
      };

      reader.onerror = () => {
        this.selectedLogoFileErrorMessage = 'Could not read the file.';
        this.logoFileInput.nativeElement.value = '';
        this.selectedLogoFile = null;
        this.selectedLogoFilePreview = null;
        return;
      };
    };
  }

  onIconSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedIconFileErrorMessage = null;
    if (input.files && input.files[0]) {
      const file = input.files[0];

      this.selectedIconFile = file;
      // Validate file type
      if (!VALID_IMAGE_TYPES.includes(file.type)) {
        this.selectedIconFileErrorMessage = `Please choose a JPEG, PNG, GIF, or SVG file.`;
        this.iconFileInput.nativeElement.value = '';
        this.selectedIconFilePreview = null;
        this.selectedIconFile = null;
        console.log('Selected icon file:', file);
        return;
      }

      // Validate file size (max 100kb)
      if (file.size > IMAGE_MAX_SIZE_KB) {
        this.selectedIconFileErrorMessage = `File size exceeds 100KB limit.`;
        this.iconFileInput.nativeElement.value = '';
        this.selectedIconFilePreview = null;
        this.selectedIconFile = null;
        console.log('Selected icon file:', file);
        return;
      }

      // Validate image dimension and preview
      this.validateIconDimensionAndPreview(file);
    }
  }

  validateIconDimensionAndPreview(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      const img = new Image();
      img.src = reader.result as string;

      img.onload = () => {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        if (
          width > ICON_DIMENSION.innerWidth ||
          height > ICON_DIMENSION.innerHeight
        ) {
          this.selectedIconFileErrorMessage = `Image dimension exceed ${ICON_DIMENSION.innerWidth} X ${ICON_DIMENSION.innerHeight}. Current dimension is ${width} X ${height}.`;
          this.iconFileInput.nativeElement.value = '';
          this.selectedIconFile = null;
          this.selectedIconFilePreview = null;
          return;
        } else {
          this.selectedIconFilePreview = reader.result;
        }

        img.onerror = () => {
          this.selectedIconFileErrorMessage =
            'Could not read image dimensions.';
          this.iconFileInput.nativeElement.value = '';
          this.selectedIconFile = null;
          this.selectedIconFilePreview = null;
          return;
        };
      };

      reader.onerror = () => {
        this.selectedIconFileErrorMessage = 'Could not read the file.';
        this.iconFileInput.nativeElement.value = '';
        this.selectedIconFile = null;
        this.selectedIconFilePreview = null;
        return;
      };
    };
  }

  onFavIconSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFaviconFileErrorMessage = null;
    if (input.files && input.files[0]) {
      const file = input.files[0];

      this.selectedFaviconFile = file;
      // Validate file type
      if (!VALID_IMAGE_TYPES.includes(file.type)) {
        this.selectedFaviconFileErrorMessage = `Please choose a JPEG, PNG, GIF, or SVG file.`;
        this.faviconFileInput.nativeElement.value = '';
        this.selectedFaviconFilePreview = null;
        this.selectedFaviconFile = null;
        console.log('Selected favicon file:', file);
        return;
      }

      // Validate file size (max 100kb)
      if (file.size > IMAGE_MAX_SIZE_KB) {
        this.selectedFaviconFileErrorMessage = `File size exceeds 100KB limit.`;
        this.faviconFileInput.nativeElement.value = '';
        this.selectedFaviconFilePreview = null;
        this.selectedFaviconFile = null;
        console.log('Selected favicon file:', file);
        return;
      }

      // Validate image dimension and preview
      this.validateFaviconDimensionAndPreview(file);
    }
  }

  validateFaviconDimensionAndPreview(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      const img = new Image();
      img.src = reader.result as string;

      img.onload = () => {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        if (
          width > FAVICON_DIMENSION.innerWidth ||
          height > FAVICON_DIMENSION.innerHeight
        ) {
          this.selectedFaviconFileErrorMessage = `Image dimension exceed ${FAVICON_DIMENSION.innerWidth} X ${FAVICON_DIMENSION.innerHeight}. Current dimension is ${width} X ${height}.`;
          this.faviconFileInput.nativeElement.value = '';
          this.selectedFaviconFile = null;
          this.selectedFaviconFilePreview = null;
          return;
        } else {
          this.selectedFaviconFilePreview = reader.result;
        }

        img.onerror = () => {
          this.selectedFaviconFileErrorMessage =
            'Could not read image dimensions.';
          this.faviconFileInput.nativeElement.value = '';
          this.selectedFaviconFile = null;
          this.selectedFaviconFilePreview = null;
          return;
        };
      };

      reader.onerror = () => {
        this.selectedFaviconFileErrorMessage = 'Could not read the file.';
        this.faviconFileInput.nativeElement.value = '';
        this.selectedFaviconFile = null;
        this.selectedFaviconFilePreview = null;
        return;
      };
    };
  }

  sendLogoFile(): void {
    console.log(this.selectedLogoFile);
  }

  sendIconFile(): void {
    console.log(this.selectedIconFile);
  }

  sendFavIconFile(): void {
    console.log(this.selectedFaviconFile);
  }
}
