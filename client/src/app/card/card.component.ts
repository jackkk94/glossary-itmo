import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() item!: Item;

  constructor(private router: Router) {}
  public goToItemPage(): void {
    this.router.navigate( ['/terms', this.item.id], );
  }
}
