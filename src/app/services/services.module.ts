import { NgModule } from '@angular/core';

// Services
import { MenuService, SettingsService, UserblockService, AuthService } from './index';

@NgModule({
    declarations: [

    ],
    imports: [

    ],
    providers: [
        // For theme
        MenuService,
        SettingsService,
        UserblockService,

        // For authentication
        AuthService
    ]
})

export class ServiceModule { }