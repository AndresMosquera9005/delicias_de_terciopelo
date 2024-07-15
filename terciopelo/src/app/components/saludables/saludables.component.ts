import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-saludables',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './saludables.component.html',
  styleUrl: './saludables.component.css'
})
export class SaludablesComponent {

}
