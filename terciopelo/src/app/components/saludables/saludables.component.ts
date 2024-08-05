import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-saludables',
  standalone: true,
  imports: [HeaderComponent, CardComponent],
  templateUrl: './saludables.component.html',
  styleUrl: './saludables.component.css'
})
export class SaludablesComponent {

}
