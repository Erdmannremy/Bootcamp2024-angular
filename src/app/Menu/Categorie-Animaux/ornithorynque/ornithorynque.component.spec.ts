import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnithorynqueComponent } from './ornithorynque.component';

describe('OrnithorynqueComponent', () => {
  let component: OrnithorynqueComponent;
  let fixture: ComponentFixture<OrnithorynqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrnithorynqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrnithorynqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
