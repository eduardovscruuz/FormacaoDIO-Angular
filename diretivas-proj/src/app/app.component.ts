import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { CardAtributosComponent } from './components/card-atributos/card-atributos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CardComponent, CardAtributosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isAlive = true;
  title = 'diretivas-proj';
}
