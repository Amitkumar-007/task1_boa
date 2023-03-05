import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Interfaces';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [];
  url: string = 'http://localhost:8080/api/v1/products';
  constructor(private http: HttpClient) {
    this.products = [
      {productname: 'Checking'},
      {productname: 'Savings'},
      {productname: 'Credit Cards'},
      {productname: 'Home Loans'},
      {productname: 'Auto Loans'},
      {productname: 'Investing'},
      {productname: 'Better Money Habits'}
    ];
  }
  ngOnInit() {}
  // getProducts(): Product[] {
  //   console.log("getProducts",this.products);
  //   return this.products;
  // }
  getProducts(){
    return this.http.get<Product[]>(this.url);
  }
}
