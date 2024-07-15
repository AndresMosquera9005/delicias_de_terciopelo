import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SaludablesComponent } from '../saludables/saludables.component';
import { TradicionalesComponent } from '../tradicionales/tradicionales.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SaludablesComponent, TradicionalesComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor( private router: Router ){  }

  listaMenuSaludable(){
    this.router.navigate(['saludables'])
  }

  listaMenuTradicionales(){
    this.router.navigate(['tradicionales'])
  }

}
