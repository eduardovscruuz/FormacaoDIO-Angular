import { Component } from '@angular/core';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';

@Component({
  selector: 'app-home',
  imports: [BigCardComponent, SmallCardComponent, MenuTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
