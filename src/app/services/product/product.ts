import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private http = inject(HttpClient);
  private readonly apiUrl =
    'http://localhost:51400/adapters/http/ProdutoController.cfc?method=listar';
  getProducts() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
