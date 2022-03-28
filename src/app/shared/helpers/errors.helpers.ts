import { AbstractControl } from '@angular/forms';
import { ERROR_TYPES } from '../const/errors.const';

export function hasError(
  formControl: AbstractControl,
  errorType: string
): boolean {
  if (errorType === ERROR_TYPES.required) {
    return this.submitted && formControl.errors?.required;
  }

  if (errorType === ERROR_TYPES.email) {
    return this.submitted && formControl.errors?.email;
  }

  if (errorType === ERROR_TYPES.minLength) {
    return this.submitted && formControl.errors?.minlength;
  }

  return false;
}
