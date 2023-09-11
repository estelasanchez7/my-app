import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  http = inject(HttpClient);
  products: Product[] = [];

  changeTitle() {
    this.title = 'changed';
  }

  ngOnInit() {
    /* esto es lo mismo que useEffect en React */
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => { 
        this.products = data;
      });
  }
}
