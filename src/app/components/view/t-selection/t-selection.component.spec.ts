import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TSelectionComponent } from './t-selection.component';

describe('TSelectionComponent', () => {
  let component: TSelectionComponent;
  let fixture: ComponentFixture<TSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
