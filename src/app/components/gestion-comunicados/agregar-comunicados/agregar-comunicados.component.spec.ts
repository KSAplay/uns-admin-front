import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarComunicadosComponent } from './agregar-comunicados.component';

describe('AgregarComunicadosComponent', () => {
  let component: AgregarComunicadosComponent;
  let fixture: ComponentFixture<AgregarComunicadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarComunicadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarComunicadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
