import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICards } from '../../../../../../assets/models/ICards';

@Injectable({
  providedIn: 'root',
})
export class CardOneService {
  private api = environment.baseUrlApi;

  constructor(private http: HttpClient) {}
  getCardById(id: string): Promise<ICards> {
    return new Promise((result, reject) => {
      this.http.get<{ data: ICards }>(`${this.api}cards/${id}`).subscribe(
        (response) => result(response.data),
        (err) => reject()
      );
    });
  }
}
