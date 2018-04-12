import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../../../services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loginError: string = undefined;

    constructor(
      public fb: FormBuilder,
      public router: Router,
      public auth$ervice: AuthService
    ) {

        // Building login form
        this.loginForm = fb.group({
            'username': ['', [Validators.required]],
            'password': ['', [Validators.required]]
        });

    }

    ngOnInit() {
    }

    // Login process
    login() {
        this.auth$ervice.redirectToHome();
    }

}
