import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSeccionesComponent } from './gestion-secciones.component';

describe('GestionSeccionesComponent', () => {
  let component: GestionSeccionesComponent;
  let fixture: ComponentFixture<GestionSeccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionSeccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
