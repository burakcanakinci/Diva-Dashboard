import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckStatisticsComponent } from './check-statistics.component';

describe('CheckStatisticsComponent', () => {
  let component: CheckStatisticsComponent;
  let fixture: ComponentFixture<CheckStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
