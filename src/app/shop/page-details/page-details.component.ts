import { Component, OnInit } from '@angular/core';
import { ProductsService } from "src/app/core/services/products.service";
import { ActivatedRoute } from "@angular/router";
import { IProductModel } from 'src/app/core/interfaces/common-model';
@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss']
})
export class PageDetailsComponent implements OnInit {
  products = [];
  private routeParamsub;
  productdetails: IProductModel;
  constructor(private productDB: ProductsService, private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.initProductdetails();
  }
  initProductdetails() {
    this.routeParamsub = this.route.params.subscribe(async params => {
      const id: number = parseInt(params.productId);
      this.productdetails = await this.productDB.get(id);
    });
  }
  ngOnDestroy() {
    if (this.routeParamsub != null) {
      this.routeParamsub.unsubscribe();
    }
  }

}
