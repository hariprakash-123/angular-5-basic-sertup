import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { ControlMessagesComponent } from './index';

@NgModule({
    declarations: [
        ControlMessagesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ControlMessagesComponent
    ]
})

export class DirectiveModule {}