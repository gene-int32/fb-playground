import { Component } from '@angular/core';

import { AuthService } from '../../services';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html'
})
export class SignInComponent {
  user$ = this.auth.user$;

  constructor(private auth: AuthService) {}

  onSignInWithEmail(email: string, secret: string) {}

  onGoogleSignIn() {
    this.auth.signInWithGoogle();
  }
}
