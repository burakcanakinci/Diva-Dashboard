import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SirStatisticComponent } from './sir-statistic.component';

describe('SirStatisticComponent', () => {
  let component: SirStatisticComponent;
  let fixture: ComponentFixture<SirStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SirStatisticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SirStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
