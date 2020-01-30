import { Component, OnInit } from '@angular/core';
import { ProductsService } from "src/app/core/services/products.service";

@Component({
  selector: 'app-page-listing',
  templateUrl: './page-listing.component.html',
  styleUrls: ['./page-listing.component.scss']
})
export class PageListingComponent implements OnInit {
  products = [];
  constructor(private productDB: ProductsService, ) { }

  ngOnInit() {
    this.initProduct();
  }
  async initProduct() {
    this.products = await this.productDB.list();
  }
}
