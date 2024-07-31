import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TradicionalesComponent } from "./components/tradicionales/tradicionales.component";
import { QuienesSomosComponent } from "./components/quienes-somos/quienes-somos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TradicionalesComponent, QuienesSomosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'terciopelo';
}
