import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriaFisicaPage } from './memoria-fisica-page';

describe('MemoriaFisicaPage', () => {
  let component: MemoriaFisicaPage;
  let fixture: ComponentFixture<MemoriaFisicaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoriaFisicaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MemoriaFisicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
