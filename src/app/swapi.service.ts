import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class SwapiService {

  constructor(private http: Http) { }

  get(type: string) {
    return this.http.get(`http://swapi.co/api/${type}`)
      .map(response => response.json().results)
      .map(this.formatResults);
  }

  private formatResults(results) {
    return results.map(result => {
      const name = result['name'];
      for (const property in result) {
        if (Array.isArray(result[property])) { delete result[property]; }
        delete result['created'];
        delete result['edited'];
        delete result['name'];
      }
      return Object.assign({}, result, { keys: Object.keys(result) }, { name: name });
    });
  }

}
