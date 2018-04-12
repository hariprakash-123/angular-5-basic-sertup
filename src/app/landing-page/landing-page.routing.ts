import { Routes, RouterModule } from '@angular/router';

// Components
import { LandingPageComponent } from './landing-page.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';

const LandingPageRoutes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: '',
        component: LandingPageComponent,
        children: [
            {   // Auth Component for authentication
                path: 'auth',
                component: AuthComponent,
                children: [
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    {   // Login page
                        path: 'login',
                        component: LoginComponent
                    }
                ]
            }
        ]
    }
];

export const LandingPageRouting = RouterModule.forChild(LandingPageRoutes);