import { Component } from '@angular/core';
import { Product } from 'src/app/Interfaces';
import { ProductsService } from './Services/products.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
    products : Product[] = [];
    constructor(private productsService : ProductsService){}

    ngOnInit(){
      // this.products = this.productsService.getProducts();
      this.productsService.getProducts().subscribe(products => this.products = products);
      console.log(this.products);
    }
}
