import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordContainerComponent } from './forgot-password-container.component';

describe('ForgotPasswordContainerComponent', () => {
  let component: ForgotPasswordContainerComponent;
  let fixture: ComponentFixture<ForgotPasswordContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
