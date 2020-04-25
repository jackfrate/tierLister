import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDetailContainerComponent } from './board-detail-container.component';

describe('BoardDetailContainerComponent', () => {
  let component: BoardDetailContainerComponent;
  let fixture: ComponentFixture<BoardDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
