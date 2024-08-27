import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { TradicionalesComponent } from './components/tradicionales/tradicionales.component';
import { SaludablesComponent } from './components/saludables/saludables.component';
import { CoberturaHorarioMedioDePagoComponent } from './components/cobertura-horario-medio-de-pago/cobertura-horario-medio-de-pago.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CarritoDeComprasComponent } from './components/carrito-de-compras/carrito-de-compras.component';

export const routes: Routes = [
    {
        path:'', component: BodyComponent
    },
    {
        path:'body', component: BodyComponent
    },
    {
        path: 'headers', component: HeaderComponent
    },
    {
        path: 'tradicionales', component: TradicionalesComponent
    },
    {
        path: 'saludables', component: SaludablesComponent
    },
    {
        path: 'cobertur-horario', component: CoberturaHorarioMedioDePagoComponent
    },
    {
        path:'login', component: LoginComponent
    },
    {
        path:'registro', component: RegistroComponent
    },
    {
        path:'carrito de compras', component: CarritoDeComprasComponent
    },
    
    {
        path: '**' , component : TradicionalesComponent
    }
    
];
