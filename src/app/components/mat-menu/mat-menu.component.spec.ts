import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMenuComponent } from './mat-menu.component';

describe('MatMenuComponent', () => {
  let component: MatMenuComponent;
  let fixture: ComponentFixture<MatMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
