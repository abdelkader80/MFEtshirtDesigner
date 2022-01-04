import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestcatComponent } from './gestcat.component';

describe('GestcatComponent', () => {
  let component: GestcatComponent;
  let fixture: ComponentFixture<GestcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
