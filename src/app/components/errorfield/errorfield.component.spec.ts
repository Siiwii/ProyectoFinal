import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorfieldComponent } from './errorfield.component';

describe('ErrorfieldComponent', () => {
  let component: ErrorfieldComponent;
  let fixture: ComponentFixture<ErrorfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
