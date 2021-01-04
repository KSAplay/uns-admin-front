import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMenusComponent } from './agregar-menus.component';

describe('AgregarMenusComponent', () => {
  let component: AgregarMenusComponent;
  let fixture: ComponentFixture<AgregarMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarMenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
