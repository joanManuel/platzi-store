import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// import {HomeComponent} from './home/components/home/home.component';
// import {ProductsComponent} from './product/components/products/products.component';
// import {ContactComponent} from './contact/components/contact.component';
import {DemoComponent} from './demo/demo.component';
import {PageNotFoundComponent} from './page-not-found/components/page-not-found.component';
// import {ProductDetailComponent} from './product/components/product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';

import { AdminGuard } from "./admin.guard";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,

    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      },
      {
        path: "home",
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
        // component: HomeComponent
      },
      {
        path: "products",
        // canActivate: [AdminGuard],
        loadChildren: () =>
          import("./product/product.module").then(m => m.ProductModule)
      },
      // {
      //   path: "products/:id",
      //   component: ProductDetailComponent
      // },
      {
        path: "contact",
        canActivate: [AdminGuard],
        loadChildren: () =>
          import("./contact/contact.module").then(m => m.ContactModule)
      }
    ]
  },
  {
    path: "demo",
    component: DemoComponent
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then(
        m => m.AdminModule
      )
  },
  {
    path: "**",
    loadChildren: () =>
      import("./page-not-found/page-not-found.module").then(
        m => m.ClassPageNotFoundModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
