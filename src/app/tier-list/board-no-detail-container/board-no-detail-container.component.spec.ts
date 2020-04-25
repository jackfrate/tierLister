import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardNoDetailContainerComponent } from './board-no-detail-container.component';

describe('BoardNoDetailContainerComponent', () => {
  let component: BoardNoDetailContainerComponent;
  let fixture: ComponentFixture<BoardNoDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardNoDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardNoDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
