import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSocialButtonsComponent } from './login-social-buttons.component';

describe('LoginSocialButtonsComponent', () => {
  let component: LoginSocialButtonsComponent;
  let fixture: ComponentFixture<LoginSocialButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSocialButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSocialButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
