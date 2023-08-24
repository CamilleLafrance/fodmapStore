import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CategoryComponent } from "./components/category/category.component";
import { ProductComponent } from "./components/product/product.component";
import { OrderComponent } from "./components/order/order.component";
import { UserComponent } from "./components/user/user.component";
import { ProductPageComponent } from "./components/product-page/product-page.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { NavigationCategoriesComponent } from "./components/navigation-categories/navigation-categories.component";
import { MainViewComponent } from "./components/main-view/main-view.component";
import { AuthComponent } from "./components/auth/auth.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AuthService } from "./services/auth.service";
import { FourOhFourComponent } from "./components/four-oh-four/four-oh-four.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    OrderComponent,
    UserComponent,
    ProductPageComponent,
    NavigationComponent,
    NavigationCategoriesComponent,
    AuthComponent,
    MainViewComponent,
    HeaderComponent,
    FooterComponent,
    FourOhFourComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
