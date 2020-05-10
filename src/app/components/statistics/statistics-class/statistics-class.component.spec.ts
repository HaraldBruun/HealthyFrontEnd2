import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsClassComponent } from './statistics-class.component';

describe('StatisticsClassComponent', () => {
  let component: StatisticsClassComponent;
  let fixture: ComponentFixture<StatisticsClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
