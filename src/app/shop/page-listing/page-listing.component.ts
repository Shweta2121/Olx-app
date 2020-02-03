import { Component, OnInit } from '@angular/core';
import { ProductsService } from "src/app/core/services/products.service";
import { LocationService } from "src/app/core/services/location.service";
import { IProductModel, IFilterModels } from "src/app/core/interfaces/common-model";
import { Subscription } from 'rxjs';
import { FilterService } from '../../core/services/filter.service';
import { CategoriesService } from "src/app/core/services/categories.service";
import { map, startWith } from 'rxjs/operators';
import { combineLatest, Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-page-listing',
  templateUrl: './page-listing.component.html',
  styleUrls: ['./page-listing.component.scss']
})
export class PageListingComponent implements OnInit {
  product = this.productDB.productDataDump;
  product$: Observable<IProductModel[]>;
  filteredproduct$: Observable<IProductModel[]>;
  filter: FormControl;
  filter$: Observable<string>;


  products = [];
  filterSubcriber: Subscription;
  filters: IFilterModels;
  constructor(private productDB: ProductsService,
    private filterserve: FilterService,
    private LocationServe: LocationService,
    private categoryDB: CategoriesService,

  ) {
    this.product$ = of(this.product);
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredproduct$ = combineLatest(this.product$, this.filter$).pipe(
      map(([productDataDump, filterString]) => productDataDump.filter
        (product => product.desc.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    );
  }

  ngOnInit() {
    this.initProduct();
  }
  ngOnDestroy(): void {
    if (this.filterSubcriber) {
      this.filterSubcriber.unsubscribe();
    }
  }
  async initProduct() {
    this.filterSubcriber = this.filterserve.filtersserve.subscribe(async f => {
      this.filters = f;
      this.products = await this.productDB.list(x => (f.category == null || x.category == f.category) && (f.location == null || x.location == f.location));
    });
  }
}