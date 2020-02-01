import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageListingComponent } from "./page-listing/page-listing.component";
import { PageDetailsComponent } from "./page-details/page-details.component";

const routes: Routes = [
    {
        path: "",
        component: PageListingComponent
    },
    { path: "products/:productId", component: PageDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopRoutingModule { }
