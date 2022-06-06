import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryReactComponent } from './category-react.component';

describe('CategoryReactComponent', () => {
  let component: CategoryReactComponent;
  let fixture: ComponentFixture<CategoryReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryReactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
