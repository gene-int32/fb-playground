import { Injectable, Inject, InjectionToken } from '@angular/core';
import firebase from 'firebase/app';

type Firebase = typeof firebase;
const FIRE_TOKEN = new InjectionToken('FIRE_TOKEN', {
  factory: () => firebase
});

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  constructor(@Inject(FIRE_TOKEN) private fb: Firebase) {}
}
