import { Component, OnInit, Input } from '@angular/core';

import { CardOneService } from './services/card-one.service';
import { ICards } from '../../../../../assets/models/ICards';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-card-one',
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.scss'],
})
export class CardOneComponent implements OnInit {
  id: string;
  card: ICards = {} as ICards;

  constructor(
    private service: CardOneService,
    private modalCtrl: ModalController
  ) {}

  async ngOnInit() {
    this.card = await this.service.getCardById(this.id);
  }

  closeCard() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
