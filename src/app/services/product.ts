import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private http = inject(HttpClient);
  getProducts() {
    return this.http.get<any[]>('/adapters/http/ProdutoController.cfc?method=listar');
  }
}
