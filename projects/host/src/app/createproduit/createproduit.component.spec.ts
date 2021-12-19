import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateproduitComponent } from './createproduit.component';

describe('CreateproduitComponent', () => {
  let component: CreateproduitComponent;
  let fixture: ComponentFixture<CreateproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
