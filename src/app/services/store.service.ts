import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, observeOn, tap } from 'rxjs/operators';
import firebase from 'firebase/app';

const STORE_EVENTS = {
  VALUE: 'value'
};

@Injectable({ providedIn: 'root' })
export class StoreService {
  private db = firebase.database();

  constructor() {}

  ref(path: string) {
    return this.db.ref(path);
  }

  create<T>(ref: any, data: T): Observable<any> {
    return new Observable<any>(observer => {
      ref.set(data, err => {
        observer.next(err);
        observer.complete();
      });
    });
  }

  read<T = any>(ref: any): Observable<T> {
    return new Observable<T>(observer => {
      ref.once(
        STORE_EVENTS.VALUE,
        dataSnapshot => {
          observer.next(dataSnapshot.val());
          observer.complete();
        },
        err => observer.error(err)
      );
    });
  }

  update<T>(ref: any, data: T): Observable<any> {
    return new Observable<any>(observer => {
      ref.update(data, err => {
        observer.next(err);
        observer.complete();
      });
    });
  }

  delete(ref: any): Observable<any> {
    return new Observable<any>(observer => {
      ref.remove(err => {
        observer.next(err);
        observer.complete();
      });
    });
  }

  listen<T = any>(ref: any): Observable<T> {
    return new Observable<T>(observer => {
      const listener = ref.on(STORE_EVENTS.VALUE, dataSnapshot => observer.next(dataSnapshot.val()));

      return () => {
        ref.off(STORE_EVENTS.VALUE, listener);
      };
    });
  }
}
