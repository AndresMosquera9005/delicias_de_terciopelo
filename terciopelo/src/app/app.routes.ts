import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { TradicionalesComponent } from './components/tradicionales/tradicionales.component';
import { SaludablesComponent } from './components/saludables/saludables.component';

export const routes: Routes = [
    {
        path:'', component: HeaderComponent
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
    }
];
