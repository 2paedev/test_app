import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule],
      providers: [{ provide: FormBuilder, useValue: formBuilder }],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.controlName = 'aControl';
    component.form = formBuilder.group({
      aControl: [''],
    });
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correctly icon if exists', () => {
    let icon = fixture.debugElement.query(By.css('ion-icon'))?.nativeElement;
    expect(icon).toBeUndefined();
    component.icon = 'test-icon';
    fixture.detectChanges();
    icon = fixture.debugElement.query(By.css('ion-icon'))?.nativeElement;
    expect(icon).toBeDefined();
  });

  it('should not show an error message when input values are correct and is submitted', () => {
    component.form = formBuilder.group({
      aControl: ['', [Validators.required]],
    });
    component.submitted = true;
    const aControl = component.fc.aControl;
    aControl.setValue('example value');
    fixture.detectChanges();

    expect(aControl.valid).toBeTruthy();
    const message = fixture.debugElement.query(
      By.css('.input__error')
    )?.nativeElement;
    expect(message).toBeUndefined();
  });

  it('should show an error message when required validation is fired and is submitted', () => {
    component.form = formBuilder.group({
      aControl: ['', [Validators.required]],
    });
    component.submitted = true;
    fixture.detectChanges();
    const aControl = component.form.controls.aControl;
    expect(aControl.valid).toBeFalsy();

    aControl.setValue('');
    fixture.detectChanges();
    expect(aControl.valid).toBeFalsy();
    expect(aControl.hasError('required')).toBeTruthy();
    const message = fixture.debugElement.query(
      By.css('.input__error')
    )?.nativeElement;
    expect(message).toBeDefined();
  });

  it('should show an error message when email validation is fired and is submitted', () => {
    component.form = formBuilder.group({
      aControl: ['', [Validators.email]],
    });
    component.submitted = true;
    fixture.detectChanges();
    const aControl = component.form.controls.aControl;
    aControl.setValue('bad_email_format');
    fixture.detectChanges();

    expect(aControl.valid).toBeFalsy();
    expect(aControl.hasError('email')).toBeTruthy();
    const message = fixture.debugElement.query(
      By.css('.input__error')
    )?.nativeElement;
    expect(message).toBeDefined();
  });

  it('should show an error message when minlength validation is fired and is submitted', () => {
    component.form = formBuilder.group({
      aControl: ['', [Validators.minLength(5)]],
    });
    component.submitted = true;
    fixture.detectChanges();
    const aControl = component.form.controls.aControl;
    aControl.setValue('1234');
    fixture.detectChanges();

    expect(aControl.valid).toBeFalsy();
    expect(aControl.hasError('minlength')).toBeTruthy();
    const message = fixture.debugElement.query(
      By.css('.input__error')
    )?.nativeElement;
    expect(message).toBeDefined();
  });

  it('should not show an error message when the form is not submitted', () => {
    component.form = formBuilder.group({
      aControl: ['', [Validators.required]],
    });
    component.submitted = false;
    const aControl = component.fc.aControl;
    aControl.setValue('');
    fixture.detectChanges();

    expect(aControl.valid).toBeFalsy();
    const message = fixture.debugElement.query(
      By.css('.input__error')
    )?.nativeElement;
    expect(message).toBeUndefined();
  });

  //TODO: Si no se dispone de Cypress se podría testear los mensajes de error
});
