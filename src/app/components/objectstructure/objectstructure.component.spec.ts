import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectstructureComponent } from './objectstructure.component';

describe('ObjectstructureComponent', () => {
  let component: ObjectstructureComponent;
  let fixture: ComponentFixture<ObjectstructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectstructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
