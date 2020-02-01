import { Component, OnInit } from '@angular/core';
import { ProductsService } from "src/app/core/services/products.service";
import { LocationService } from "src/app/core/services/location.service";
import { IProductModel, IFilterModels } from "src/app/core/interfaces/common-model";
import { Subscription } from 'rxjs';
import { FilterService } from '../../core/services/filter.service';
@Component({
  selector: 'app-page-listing',
  templateUrl: './page-listing.component.html',
  styleUrls: ['./page-listing.component.scss']
})
export class PageListingComponent implements OnInit {
  products = [];
  filterSubcriber: Subscription;
  filter: IFilterModels;
  constructor(private productDB: ProductsService,
    private filterserve: FilterService,
    private LocationServe: LocationService,
  ) { }

  ngOnInit() {
    this.initProduct();
  }
  ngOnDestroy(): void {
    if (this.filterSubcriber) {
      this.filterSubcriber.unsubscribe();
    }
  }
  async initProduct() {
    this.filterSubcriber = this.filterserve.filter.subscribe(async f => {
      this.filter = f;
      this.products = await this.productDB.list(x => (f.location == null || x.location == f.location));
    });
  }
}
