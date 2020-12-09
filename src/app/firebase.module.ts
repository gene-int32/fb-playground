import { NgModule } from '@angular/core';
import fb from 'firebase/app';

import { environment } from '../environments/environment';

@NgModule({
  providers: []
})
export class FirebaseModule {
  constructor() {
    fb.initializeApp(environment.firebaseConfig);
  }
}
