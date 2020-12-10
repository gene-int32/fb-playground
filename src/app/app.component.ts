import { Component, OnInit } from '@angular/core';

import { FirebaseService } from './services';

@Component({
  selector: 'app-root',
  template: `fb-playground (latest)`
})
export class AppComponent implements OnInit {
  constructor(private fb: FirebaseService) {}

  ngOnInit() {}
}
