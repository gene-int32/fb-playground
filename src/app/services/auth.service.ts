import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { BehaviorSubject, fromEventPattern } from 'rxjs';

import { User } from '../types';

@Injectable({ providedIn: 'root' })
export class AuthService {
  get user$() {
    return this.userSubject.asObservable();
  }

  private userSubject = new BehaviorSubject<User>(null);

  private fireauth = firebase.auth();

  private googleProvider = new firebase.auth.GoogleAuthProvider();

  constructor() {
    this.fireauth.onAuthStateChanged(user => {
      this.userSubject.next(user);
    });
  }

  signInWithEmail() {}

  async signInWithGoogle() {
    try {
      await this.fireauth.signInWithPopup(this.googleProvider);
    } catch (err) {
      console.log(err);
    }
  }

  async signOut() {
    try {
      await this.fireauth.signOut();
    } catch (err) {
      console.log(err);
    }
  }
}
