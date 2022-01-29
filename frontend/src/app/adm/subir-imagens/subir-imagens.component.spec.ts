import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirImagensComponent } from './subir-imagens.component';

describe('SubirImagensComponent', () => {
  let component: SubirImagensComponent;
  let fixture: ComponentFixture<SubirImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirImagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
