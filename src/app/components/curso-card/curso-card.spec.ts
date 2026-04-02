import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoCard } from './curso-card';

describe('CursoCard', () => {
  let component: CursoCard;
  let fixture: ComponentFixture<CursoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CursoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
