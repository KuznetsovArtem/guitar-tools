import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDERS } from './app.routes';

//noinspection TypeScriptValidateTypes
bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]).catch(err => console.error(err));
