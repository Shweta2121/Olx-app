import { Component, OnInit } from '@angular/core';
import { LocationService } from "src/app/core/services/location.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FilterService } from "../../core/services/filter.service";
import { IProductModel } from "src/app/core/interfaces/common-model";
import {
  ILocationModel, ICategoryModel
} from "src/app/core/interfaces/common-model";
import { Subscription } from "rxjs";
import { map, startWith } from 'rxjs/operators';
import { combineLatest, Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ProductsService } from "src/app/core/services/products.service";
import { CategoriesService } from "src/app/core/services/categories.service";


@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {
  product = this.productserve.productDataDump;
  product$: Observable<IProductModel[]>;
  filteredproduct$: Observable<IProductModel[]>;
  filter: FormControl;
  filter$: Observable<string>;

  categories: ICategoryModel[] = [];
  location: ILocationModel[] = [];
  filterForm: FormGroup;
  private formLocationChangeSub: Subscription;
  private formCategoryChangeSub: Subscription;
  constructor(private locationserve: LocationService,
    private fb: FormBuilder,
    private categoryDB: CategoriesService,
    private FilterServe: FilterService,
    private productserve: ProductsService
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
    this.initCategory();
    this.initLocation();
    this.initForm();
  }
  async initLocation() {
    this.location = await this.locationserve.list();
  }
  async initCategory() {
    this.categories = await this.categoryDB.list();
  }

  initForm() {
    this.filterForm = this.fb.group({
      LocationId: [null],
      categoryId: [null],
    });

    this.formLocationChangeSub = this.filterForm.controls.LocationId.valueChanges.subscribe(
      res => {
        let a = null;
        if (res !== "null") {
          a = parseInt(res);
        }
        this.FilterServe.filterLocation(a);
      }
    );
    this.formCategoryChangeSub = this.filterForm.controls.categoryId.valueChanges.subscribe(
      res => {
        console.log(res)
        let a = null;
        if (res !== "null") {
          a = parseInt(res);
        }
        this.FilterServe.filterCategory(a);
      }
    );
  }
}