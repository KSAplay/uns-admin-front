import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVinculosComponent } from './agregar-vinculos.component';

describe('AgregarVinculosComponent', () => {
  let component: AgregarVinculosComponent;
  let fixture: ComponentFixture<AgregarVinculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarVinculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarVinculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
