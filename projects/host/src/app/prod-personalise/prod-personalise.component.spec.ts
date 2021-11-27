import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdPersonaliseComponent } from './prod-personalise.component';

describe('ProdPersonaliseComponent', () => {
  let component: ProdPersonaliseComponent;
  let fixture: ComponentFixture<ProdPersonaliseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdPersonaliseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdPersonaliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
