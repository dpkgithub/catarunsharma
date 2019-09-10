import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleStoriesComponent } from './people-stories.component';

describe('PeopleStoriesComponent', () => {
  let component: PeopleStoriesComponent;
  let fixture: ComponentFixture<PeopleStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
