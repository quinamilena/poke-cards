import { Component, OnInit } from '@angular/core';

import { ListTypesService } from './services/list-types.service';
import { IType } from './models/IType';
import { separate } from 'src/assets/util/separate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-types',
  templateUrl: './list-types.component.html',
  styleUrls: ['./list-types.component.scss'],
})
export class ListTypesComponent implements OnInit {
  types: Array<Array<IType>> = [];

  constructor(private service: ListTypesService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.start();
  }

  async start(): Promise<void> {
    const data = await this.service.listTypes();

    this.types = separate(data, 2);
  }

  goToType(type: string): void {
    this.router.navigate(['/list-search', 'term:' + type]);
  }
}
