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
}
