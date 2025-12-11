import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordBackToLoginComponent } from './forgot-password-back-to-login.component';

describe('ForgotPasswordBackToLoginComponent', () => {
  let component: ForgotPasswordBackToLoginComponent;
  let fixture: ComponentFixture<ForgotPasswordBackToLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordBackToLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordBackToLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
