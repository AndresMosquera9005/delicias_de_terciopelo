import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-tradicionales',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './tradicionales.component.html',
  styleUrl: './tradicionales.component.css'
})
export class TradicionalesComponent {

}
