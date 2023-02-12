import { Component, OnInit } from '@angular/core';

import { ListTypesService } from './services/list-types.service';
import { IType } from './models/IType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-types',
  templateUrl: './list-types.component.html',
  styleUrls: ['./list-types.component.scss'],
})
export class ListTypesComponent implements OnInit {
  types: Array<IType> = [];
  docRead: boolean = false;

  constructor(private service: ListTypesService, private router: Router) {
    this.start().then(() => {
      this.docRead = true;
    });
  }

  async ngOnInit(): Promise<void> {}

  async start(): Promise<void> {
    this.types = await this.service.listTypes();
  }

  goToType(type: string): void {
    this.router.navigate(['/list-search', 'term:' + type]);
  }
}
