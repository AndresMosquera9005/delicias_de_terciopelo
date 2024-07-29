import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lo-mas-vendido',
  standalone: true,
  imports: [],
  templateUrl: './lo-mas-vendido.component.html',
  styleUrl: './lo-mas-vendido.component.css'
})
export class LoMasVendidoComponent {
  @Input() tarjeta: any;

}
