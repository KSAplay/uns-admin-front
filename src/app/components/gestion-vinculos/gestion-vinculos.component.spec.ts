import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVinculosComponent } from './gestion-vinculos.component';

describe('GestionVinculosComponent', () => {
  let component: GestionVinculosComponent;
  let fixture: ComponentFixture<GestionVinculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionVinculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionVinculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
