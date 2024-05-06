import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageresultComponent } from './manageresult.component';

describe('ManageresultComponent', () => {
  let component: ManageresultComponent;
  let fixture: ComponentFixture<ManageresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageresultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
