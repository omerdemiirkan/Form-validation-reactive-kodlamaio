import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddReactComponent } from './product-add-react.component';

describe('ProductAddReactComponent', () => {
  let component: ProductAddReactComponent;
  let fixture: ComponentFixture<ProductAddReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddReactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
