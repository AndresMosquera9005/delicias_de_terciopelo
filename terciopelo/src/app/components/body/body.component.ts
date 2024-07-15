import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { QuienesSomosComponent } from "../quienes-somos/quienes-somos.component";
import { RedesSocialesComponent } from "../redes-sociales/redes-sociales.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [HeaderComponent, QuienesSomosComponent, RedesSocialesComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
