import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ERROR_TYPES } from '../../const/errors.const';
import { hasError } from '../../helpers/errors.helpers';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() icon: string;
  @Input() submitted: boolean;
  @Input() color: string;

  public readonly errorTypes = ERROR_TYPES;
  public readonly hasError = hasError;

  get fc() {
    return this.form.controls;
  }
}
