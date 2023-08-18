import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component"; 
import { CategoryComponent } from "./components/category/category.component";
import { ProductComponent } from "./components/product/product.component";
import { OrderComponent } from "./components/order/order.component";
import { UserComponent } from "./components/user/user.component";
import { ProductPageComponent } from "./product-page/product-page.component";

@NgModule({
  declarations: [
    AppComponent, 
    CategoryComponent,
    ProductComponent,
    OrderComponent,
    UserComponent,
    ProductPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
