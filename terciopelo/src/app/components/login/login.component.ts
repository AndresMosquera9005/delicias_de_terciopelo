import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RegistroComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor( private router: Router ){  }


  registro(){
    this.router.navigate(['registro'])
  }

}
