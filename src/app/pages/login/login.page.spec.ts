import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from './../../shared/shared.module';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be valid if form value is valid', () => {
    component.loginForm.setValue({
      email: 'test@mail.com',
      password: 'a Password',
      reminder: true,
    });
    component.login();
    expect(component.loginForm.valid).toEqual(true);
  });

  it('should be invalid if email is empty', () => {
    component.loginForm.setValue({
      email: '',
      password: 'a Password',
      reminder: '',
    });
    expect(component.loginForm.valid).toEqual(false);
  });

  it('should be invalid if email have bad format', () => {
    component.loginForm.setValue({
      email: 'test',
      password: 'a Password',
      reminder: '',
    });
    expect(component.loginForm.valid).toEqual(false);
  });

  it('should be invalid if password is empty', () => {
    component.loginForm.setValue({
      email: 'test',
      password: '',
      reminder: '',
    });
    expect(component.loginForm.valid).toEqual(false);
  });

  it('should be invalid if password is empty', () => {
    component.loginForm.setValue({
      email: 'test',
      password: '',
      reminder: '',
    });
    expect(component.loginForm.valid).toEqual(false);
  });

  it('should be invalid if password have less 5 characters', () => {
    component.loginForm.setValue({
      email: 'test@mail.com',
      password: '1234',
      reminder: '',
    });
    expect(component.loginForm.valid).toEqual(false);
  });
});
