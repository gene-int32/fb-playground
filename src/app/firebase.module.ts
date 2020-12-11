import { NgModule } from '@angular/core';
import fb from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import { environment } from '../environments/environment';

@NgModule({
  providers: []
})
export class FirebaseModule {
  constructor() {
    const app = fb.initializeApp(environment.firebaseConfig);
  }
}
