import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IPage } from '../../../../assets/models/IPage';
@Injectable({
  providedIn: 'root',
})
export class ListSearchService {
  private api: string;
  constructor(private http: HttpClient) {
    this.api = environment.baseUrlApi;
  }

  // https://api.pokemontcg.io/v2/cards?q=types:Dragon&orderBy=name&pageSize=10&page=2

  getCardByTypes(
    type: string,
    orderBy: string = 'name',
    pageSize: number = 10,
    page: number = 3
  ): Promise<IPage> {
    return new Promise((result, reject) => {
      try {
        this.http
          .get<IPage>(
            `${this.api}cards?q=types:${type}&orderBy=${orderBy}&pageSize=${pageSize}&page=${page}`
          )
          .subscribe(
            (response) => result(response),
            (err) => reject()
          );
      } catch (error) {
        reject();
      }
    });
  }
}
