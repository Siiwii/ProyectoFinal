import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostscontainerComponent } from './postscontainer.component';

describe('PostscontainerComponent', () => {
  let component: PostscontainerComponent;
  let fixture: ComponentFixture<PostscontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostscontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostscontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
