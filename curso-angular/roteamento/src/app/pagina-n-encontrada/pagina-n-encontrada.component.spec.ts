import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNEncontradaComponent } from './pagina-n-encontrada.component';

describe('PaginaNEncontradaComponent', () => {
  let component: PaginaNEncontradaComponent;
  let fixture: ComponentFixture<PaginaNEncontradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaNEncontradaComponent]
    });
    fixture = TestBed.createComponent(PaginaNEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
