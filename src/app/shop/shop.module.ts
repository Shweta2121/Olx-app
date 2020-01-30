import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListingComponent } from './page-listing/page-listing.component';
import { ShopRoutingModule } from "./shop-routing.module";
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [PageListingComponent],
  imports: [
    CommonModule, ShopRoutingModule, CoreModule
  ],
  exports: [
    PageListingComponent,
  ]
})
export class ShopModule { }
