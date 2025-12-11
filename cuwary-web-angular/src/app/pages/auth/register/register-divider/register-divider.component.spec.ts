import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDividerComponent } from './register-divider.component';

describe('RegisterDividerComponent', () => {
  let component: RegisterDividerComponent;
  let fixture: ComponentFixture<RegisterDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
