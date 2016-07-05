import {provideRouter, RouterConfig} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {FingerboardComponent} from "./fingerboard/fingerboard.component";

export const routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'board', component: FingerboardComponent }
];

//noinspection TypeScriptValidateTypes
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
