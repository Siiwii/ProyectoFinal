import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadernoregComponent } from './headernoreg.component';

describe('HeadernoregComponent', () => {
  let component: HeadernoregComponent;
  let fixture: ComponentFixture<HeadernoregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadernoregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadernoregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
