import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncatComponent } from './gestioncat.component';

describe('GestioncatComponent', () => {
  let component: GestioncatComponent;
  let fixture: ComponentFixture<GestioncatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioncatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
