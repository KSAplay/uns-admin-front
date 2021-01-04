import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSlidersComponent } from './gestion-sliders.component';

describe('GestionSlidersComponent', () => {
  let component: GestionSlidersComponent;
  let fixture: ComponentFixture<GestionSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionSlidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
