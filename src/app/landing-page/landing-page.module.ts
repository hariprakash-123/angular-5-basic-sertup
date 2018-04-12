import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Shared
import { SharedModule } from '../shared/shared.module';

// Routing
import { LandingPageRouting } from './landing-page.routing';

// Components
import { LandingPageComponent } from './landing-page.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        LandingPageRouting
    ],
    declarations: [
        LandingPageComponent,
        AuthComponent,
        LoginComponent
    ]
})
export class LandingPageModule { }
