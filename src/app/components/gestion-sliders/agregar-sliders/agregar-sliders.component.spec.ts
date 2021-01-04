import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSlidersComponent } from './agregar-sliders.component';

describe('AgregarSlidersComponent', () => {
  let component: AgregarSlidersComponent;
  let fixture: ComponentFixture<AgregarSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarSlidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
