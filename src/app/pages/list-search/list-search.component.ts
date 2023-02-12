import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICards } from '../../../assets/models/ICards';
import { IPage } from '../../../assets/models/IPage';
import { ListSearchService } from './services/list-search.service';

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.scss'],
})
export class ListSearchComponent implements OnInit {
  docRead: boolean = false;
  type: string = '';
  infoPage: IPage = {} as IPage;
  cards: Array<ICards> = new Array();

  constructor(
    private activateRoute: ActivatedRoute,
    private service: ListSearchService
  ) {
    const params = this.activateRoute.snapshot.params;
    this.type = String(params['term']).split(':')[1];
    this.getCards().then(() => (this.docRead = true));
  }

  ngOnInit() {}

  async getCards(): Promise<void> {
    this.infoPage = await this.service.getCardByTypes(this.type);
  }

  async onIonInfinite(ev: any) {
    if (this.infoPage.data.length > this.infoPage.totalCount) {
      ev.target.complete();

      return;
    }

    const newPage = await this.service.getCardByTypes(
      this.type,
      'name',
      10,
      this.infoPage.page + 1
    );

    const oldData = this.infoPage.data;
    newPage.data = [...oldData, ...newPage.data];
    this.infoPage = newPage;

    ev.target.complete();
  }
}
