import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchmcComponent } from './researchmc.component';

describe('ResearchmcComponent', () => {
  let component: ResearchmcComponent;
  let fixture: ComponentFixture<ResearchmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchmcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
