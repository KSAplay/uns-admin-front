import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEventosComponent } from './agregar-eventos.component';

describe('AgregarEventosComponent', () => {
  let component: AgregarEventosComponent;
  let fixture: ComponentFixture<AgregarEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
