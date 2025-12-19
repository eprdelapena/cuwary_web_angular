import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordSocialButtonsComponent } from './forgot-password-social-buttons.component';

describe('ForgotPasswordSocialButtonsComponent', () => {
  let component: ForgotPasswordSocialButtonsComponent;
  let fixture: ComponentFixture<ForgotPasswordSocialButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordSocialButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordSocialButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
