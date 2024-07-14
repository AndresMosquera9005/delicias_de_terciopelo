import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';

export const routes: Routes = [
    {
        path:'', component: BodyComponent
    },
    {
        path:'body', component: BodyComponent
    },
    {
        path: 'headers', component: HeaderComponent
    }
];
