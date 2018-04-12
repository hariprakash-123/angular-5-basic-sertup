import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Directives
import { DirectiveModule } from '../directives/directives.module';

// Services
import { ServiceModule } from '../services/services.module';

@NgModule({
    imports: [
        // Angular modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,

        // Directive module
        DirectiveModule,

        // Services module
        ServiceModule
    ],
    exports: [
        // Angular modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,

        // Directive module
        DirectiveModule,

        // Services module
        ServiceModule
    ]
})
export class SharedModule { }
