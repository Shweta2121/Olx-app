import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListingComponent } from './page-listing/page-listing.component';
import { ShopRoutingModule } from "./shop-routing.module";
import { CoreModule } from "../core/core.module";
import { PageDetailsComponent } from './page-details/page-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [PageListingComponent, PageDetailsComponent],
  imports: [
    CommonModule, ShopRoutingModule, CoreModule, HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    PageListingComponent, PageDetailsComponent
  ]
})
export class ShopModule { }
