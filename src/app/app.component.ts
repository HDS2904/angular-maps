import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project-maps';

  constructor() {}

  ngOnInit(): void {}

  goRoutes(op: number) {}
}
