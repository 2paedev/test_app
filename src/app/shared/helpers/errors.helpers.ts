import { AbstractControl } from '@angular/forms';
import { ERROR_TYPES } from '../const/errors.const';

export const hasError = (
  formControl: AbstractControl,
  errorType: string,
  submitted: boolean
): boolean => {
  if (errorType === ERROR_TYPES.required) {
    return submitted && formControl.errors?.required;
  }

  if (errorType === ERROR_TYPES.email) {
    return submitted && formControl.errors?.email;
  }

  if (errorType === ERROR_TYPES.minLength) {
    return submitted && formControl.errors?.minlength;
  }

  return false;
};
