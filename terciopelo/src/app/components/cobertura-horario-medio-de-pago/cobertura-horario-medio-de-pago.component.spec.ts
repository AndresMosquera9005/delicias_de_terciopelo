import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoberturaHorarioMedioDePagoComponent } from './cobertura-horario-medio-de-pago.component';

describe('CoberturaHorarioMedioDePagoComponent', () => {
  let component: CoberturaHorarioMedioDePagoComponent;
  let fixture: ComponentFixture<CoberturaHorarioMedioDePagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoberturaHorarioMedioDePagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoberturaHorarioMedioDePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
