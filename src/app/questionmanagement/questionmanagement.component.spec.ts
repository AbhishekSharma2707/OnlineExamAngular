import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionmanagementComponent } from './questionmanagement.component';

describe('QuestionmanagementComponent', () => {
  let component: QuestionmanagementComponent;
  let fixture: ComponentFixture<QuestionmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionmanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
