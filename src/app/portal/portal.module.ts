import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { PortalRouting } from './portal.routing';

// Components
import { PortalComponent } from './portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        PortalRouting
    ],
    declarations: [
        PortalComponent, 
        DashboardComponent
    ]
})
export class PortalModule { }
