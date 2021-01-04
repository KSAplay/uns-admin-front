import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSeccionesComponent } from './agregar-secciones.component';

describe('AgregarSeccionesComponent', () => {
  let component: AgregarSeccionesComponent;
  let fixture: ComponentFixture<AgregarSeccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarSeccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
