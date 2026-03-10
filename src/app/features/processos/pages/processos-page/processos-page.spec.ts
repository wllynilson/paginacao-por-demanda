import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessosPage } from './processos-page';

describe('ProcessosPage', () => {
  let component: ProcessosPage;
  let fixture: ComponentFixture<ProcessosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
