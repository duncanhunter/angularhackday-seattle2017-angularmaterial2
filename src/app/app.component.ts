import { Component } from '@angular/core';
import { SwapiService } from './swapi.service';
import {Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items$: Observable<any>;
  isDarkTheme = false;

  constructor(private swapiService: SwapiService) { }

  get(type: string) {
    this.items$ = this.swapiService.get(type);
  }
}
