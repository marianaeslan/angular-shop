import { Component, inject, signal } from '@angular/core';
import { CursoCard } from '../../components/curso-card/curso-card';
import { Orders } from '../../services/orders/orders';

@Component({
  selector: 'app-meus-cursos',
  imports: [CursoCard],
  templateUrl: './meus-cursos.html',
  styleUrl: './meus-cursos.scss',
})
export class MeusCursos {
  orders = inject(Orders);
  cursos = signal<any[]>([]);

  async ngOnInit() {
    this.cursos.set(await this.orders.getOrders());
  }
}
