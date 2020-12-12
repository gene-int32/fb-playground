import { Component } from '@angular/core';

import { AuthService } from '../../services';

@Component({
  selector: 'app-sign-out',
  templateUrl: './signout.component.html'
})
export class SignOutComponent {
  user$ = this.auth.user$;

  constructor(private auth: AuthService) {}

  onSignOut() {
    this.auth.signOut();
  }
}
