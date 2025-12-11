import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordDividerComponent } from './forgot-password-divider.component';

describe('ForgotPasswordDividerComponent', () => {
  let component: ForgotPasswordDividerComponent;
  let fixture: ComponentFixture<ForgotPasswordDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
