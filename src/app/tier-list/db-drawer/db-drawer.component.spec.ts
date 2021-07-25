import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbDrawerComponent } from './db-drawer.component';

describe('DbDrawerComponent', () => {
  let component: DbDrawerComponent;
  let fixture: ComponentFixture<DbDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
