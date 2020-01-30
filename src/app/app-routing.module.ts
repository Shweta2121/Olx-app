import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./shop/shop.module").then(mod => mod.ShopModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(mod => mod.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
