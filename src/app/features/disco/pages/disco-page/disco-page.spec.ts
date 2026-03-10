import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoPage } from './disco-page';

describe('DiscoPage', () => {
  let component: DiscoPage;
  let fixture: ComponentFixture<DiscoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
