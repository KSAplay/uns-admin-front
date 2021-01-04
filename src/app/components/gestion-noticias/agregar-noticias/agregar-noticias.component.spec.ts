import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarNoticiasComponent } from './agregar-noticias.component';

describe('AgregarNoticiasComponent', () => {
  let component: AgregarNoticiasComponent;
  let fixture: ComponentFixture<AgregarNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
