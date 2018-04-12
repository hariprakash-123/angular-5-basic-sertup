import { RouterModule, Routes } from '@angular/router';

const AppRoutes: Routes = [
    {
        path: '',
        loadChildren: './landing-page/landing-page.module#LandingPageModule'
    },
    {
        path: 'app',
        loadChildren: './portal/portal.module#PortalModule',
    },
    {
        path: '**',
        redirectTo: '/error/not-found'
    }
];

export const Routing = RouterModule.forRoot(AppRoutes);