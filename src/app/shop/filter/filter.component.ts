import { Component, OnInit } from '@angular/core';
import { FilterService } from "src/app/core/services/filter.service";
import {
   IProductModel
} from "src/app/core/interfaces/common-model";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { ProductsService } from 'src/app/core/services/products.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filterForm: FormGroup;
  products = [];
  private formSortByChangeSub: Subscription;


  constructor(private fb: FormBuilder,
    private FilterServe: FilterService
) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.filterForm = this.fb.group({
      sortBy: [null]
    });
    this.formSortByChangeSub = this.filterForm.controls.sortBy.valueChanges.subscribe(
      res => {
        let a = null;
        if (res !== "null") {
          a = parseInt(res);
        }
        this.FilterServe.filterSort(a);
      }
    );
  }


}
