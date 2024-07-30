import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { QuienesSomosComponent } from "../quienes-somos/quienes-somos.component";
import { RedesSocialesComponent } from "../redes-sociales/redes-sociales.component";
import { LoMasVendidoComponent } from "../lo-mas-vendido/lo-mas-vendido.component";
import { CoberturaHorarioMedioDePagoComponent } from "../cobertura-horario-medio-de-pago/cobertura-horario-medio-de-pago.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [HeaderComponent, QuienesSomosComponent, RedesSocialesComponent, LoMasVendidoComponent, CoberturaHorarioMedioDePagoComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
