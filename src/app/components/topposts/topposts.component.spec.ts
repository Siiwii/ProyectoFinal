import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppostsComponent } from './topposts.component';

describe('ToppostsComponent', () => {
  let component: ToppostsComponent;
  let fixture: ComponentFixture<ToppostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToppostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
