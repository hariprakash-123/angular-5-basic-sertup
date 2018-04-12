import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { Routing } from './app.routing';

// Shared
import { SharedModule } from './shared/shared.module';

// Components
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        Routing
    ],
    providers: [
      
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
