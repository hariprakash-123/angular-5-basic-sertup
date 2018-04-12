import { RouterModule, Routes } from '@angular/router';

// Components
import { PortalComponent } from './portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const PortalRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    {   // Portal main page
        path: '',
        component: PortalComponent,
        children: [

            {   // Dashboard screen
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    }
];

export const PortalRouting = RouterModule.forChild(PortalRoutes);