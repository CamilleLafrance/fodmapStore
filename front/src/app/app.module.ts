import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from './components/homepage/homepage.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, CategoryComponent, ProductComponent, ProductDetailsComponent, OrderComponent, UserComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
