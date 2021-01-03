import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionNoticiasComponent } from './gestion-noticias.component';

describe('GestionNoticiasComponent', () => {
  let component: GestionNoticiasComponent;
  let fixture: ComponentFixture<GestionNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
