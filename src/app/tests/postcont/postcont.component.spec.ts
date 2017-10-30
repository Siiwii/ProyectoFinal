import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcontComponent } from './postcont.component';

describe('PostcontComponent', () => {
  let component: PostcontComponent;
  let fixture: ComponentFixture<PostcontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostcontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
