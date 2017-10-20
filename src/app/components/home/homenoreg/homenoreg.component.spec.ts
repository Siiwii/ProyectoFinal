import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomenoregComponent } from './homenoreg.component';

describe('HomenoregComponent', () => {
  let component: HomenoregComponent;
  let fixture: ComponentFixture<HomenoregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomenoregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomenoregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
