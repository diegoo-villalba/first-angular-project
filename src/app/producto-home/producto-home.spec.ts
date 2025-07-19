import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoHome } from './producto-home';

describe('ProductoHome', () => {
  let component: ProductoHome;
  let fixture: ComponentFixture<ProductoHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
