import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reenviarsenha } from './reenviarsenha';

describe('Reenviarsenha', () => {
  let component: Reenviarsenha;
  let fixture: ComponentFixture<Reenviarsenha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reenviarsenha],
    }).compileComponents();

    fixture = TestBed.createComponent(Reenviarsenha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
