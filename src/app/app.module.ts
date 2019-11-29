import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductComponent} from './product/components/product/product.component';
import { CartComponent } from './cart/cart.component';

// import { HomeComponent } from './home/home.component';
// import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';

// import { BannerComponent } from './home/components/banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ProductDetailComponent } from './product/components/product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';

import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";

// import { ProductModule } from "./product/product.module";

@NgModule({
  declarations: [
    AppComponent,
    // ProductComponent,
    CartComponent,
    // ProductsComponent,
    ContactComponent,
    DemoComponent,
    PageNotFoundComponent,
    // ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    // ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
