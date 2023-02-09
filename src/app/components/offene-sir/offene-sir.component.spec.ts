import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffeneSirComponent } from './offene-sir.component';

describe('OffeneSirComponent', () => {
  let component: OffeneSirComponent;
  let fixture: ComponentFixture<OffeneSirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffeneSirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffeneSirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
