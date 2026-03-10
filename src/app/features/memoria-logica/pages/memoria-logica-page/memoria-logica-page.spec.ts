import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriaLogicaPage } from './memoria-logica-page';

describe('MemoriaLogicaPage', () => {
  let component: MemoriaLogicaPage;
  let fixture: ComponentFixture<MemoriaLogicaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoriaLogicaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MemoriaLogicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
