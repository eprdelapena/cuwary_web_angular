import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordPolicyComponent } from './forgot-password-policy.component';

describe('ForgotPasswordPolicyComponent', () => {
  let component: ForgotPasswordPolicyComponent;
  let fixture: ComponentFixture<ForgotPasswordPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
