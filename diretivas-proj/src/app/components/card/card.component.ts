import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  produtos: string[] = ['Blusa', 'Cachecol', 'Lenço'];

  adicionar() {
    this.produtos.push('Novo elemento');
  }
  remover() {
    this.produtos.pop();
  }
}
