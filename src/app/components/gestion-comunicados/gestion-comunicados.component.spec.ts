import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionComunicadosComponent } from './gestion-comunicados.component';

describe('GestionComunicadosComponent', () => {
  let component: GestionComunicadosComponent;
  let fixture: ComponentFixture<GestionComunicadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionComunicadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionComunicadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
