import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IType } from '../models/IType';

@Injectable({
  providedIn: 'root',
})
export class ListTypesService {
  constructor(private http: HttpClient) {}

  listTypes(): Promise<Array<IType>> {
    return new Promise<Array<IType>>((resolve, reject) => {
      this.http.get<any>(`${environment.baseUrlApi}types`).subscribe(
        (response) => {
          const dta = response.data.map((item: string) => {
            return {
              name: item,
              img: `../../../assets/imgs/types/${item}.png`,
            };
          });
          resolve(dta);
        },
        (err) => reject(err)
      );
    });
  }
}
