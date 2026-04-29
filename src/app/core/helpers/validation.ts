import { BrandingComponent } from 'src/app/pages/settings/branding/branding.component';
import { LOGO_DIMENSION } from '../constants/file.constant';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const validateDimensionAndPreview = (file: File): void => {
  const brand = new BrandingComponent();

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
        brand.selectedLogoFileErrorMessage = `Image dimension exceed ${LOGO_DIMENSION.innerWidth} X ${LOGO_DIMENSION.innerHeight}. Current dimension is ${width} X ${height}.`;
        brand.logoFileInput.nativeElement.value = '';
        brand.selectedLogoFile = null;
        brand.selectedLogoFilePreview = null;
        return;
      } else {
        brand.selectedLogoFilePreview = reader.result;
      }

      img.onerror = () => {
        brand.selectedLogoFileErrorMessage = 'Could not read image dimensions.';
        brand.logoFileInput.nativeElement.value = '';
        brand.selectedLogoFile = null;
        brand.selectedLogoFilePreview = null;
        return;
      };
    };

    reader.onerror = () => {
      brand.selectedLogoFileErrorMessage = 'Could not read the file.';
      brand.logoFileInput.nativeElement.value = '';
      brand.selectedLogoFile = null;
      brand.selectedLogoFilePreview = null;
      return;
    };
  };
};

export const matchPasswordValidator: ValidatorFn = (
  controls: AbstractControl
): ValidationErrors | null => {
  const password = controls.get('newPassword')?.value;
  const confirmPassword = controls.get('confirmPassword')?.value;

  return password === confirmPassword ? null : { passwordMismatch: true };
};
