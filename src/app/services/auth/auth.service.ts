import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(
        private router: Router
    ) { }

    // Redirecting to home page
    redirectToHome() {
        this.router.navigate(['/app']);
    }

}