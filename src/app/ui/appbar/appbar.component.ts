import { Component, OnInit } from '@angular/core';
import { LocationService } from "src/app/core/services/location.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FilterService } from "../../core/services/filter.service"
import {
  ILocationModel,
} from "src/app/core/interfaces/common-model";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {
  location: ILocationModel[] = [];
  filterForm: FormGroup;
  private formLocationChangeSub: Subscription;
  constructor(private locationserve: LocationService,
    private fb: FormBuilder,
    private FilterServe: FilterService
  ) { }

  ngOnInit() {
    this.initLocation();
    this.initForm();
  }
  async initLocation() {
    this.location = await this.locationserve.list();
  }


  initForm() {
    this.filterForm = this.fb.group({
      LocationId: [null],
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
  }
}