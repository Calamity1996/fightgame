import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentcompComponent } from './tournamentcomp.component';

describe('TournamentcompComponent', () => {
  let component: TournamentcompComponent;
  let fixture: ComponentFixture<TournamentcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
