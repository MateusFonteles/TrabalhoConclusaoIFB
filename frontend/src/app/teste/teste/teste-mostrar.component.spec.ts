import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteMostrarComponent } from './teste-mostrar.component';

describe('TesteMostrarComponent', () => {
  let component: TesteMostrarComponent;
  let fixture: ComponentFixture<TesteMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteMostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
