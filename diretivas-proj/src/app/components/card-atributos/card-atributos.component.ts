import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-atributos',
  imports: [CommonModule],
  templateUrl: './card-atributos.component.html',
  styleUrl: './card-atributos.component.scss',
})
export class CardAtributosComponent {
  estilo: string = 'enable';
  corDeFundo: string = 'red';

  alterarEstilo() {
    if (this.estilo === 'enable') {
      this.estilo = 'disable';
    } else {
      this.estilo = 'enable';
    }
  }
}
