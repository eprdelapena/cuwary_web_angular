import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSocialButtonsComponent } from './register-social-buttons.component';

describe('RegisterSocialButtonsComponent', () => {
  let component: RegisterSocialButtonsComponent;
  let fixture: ComponentFixture<RegisterSocialButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterSocialButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSocialButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
