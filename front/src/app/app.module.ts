import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductComponent } from "./components/main-view/products-list/product/product.component";
import { UserComponent } from "./components/user/user.component";
import { ProductPageComponent } from "./components/product-page/product-page.component";
import { NavigationComponent } from "./components/main-view/navigation/navigation.component";
import { NavigationCategoriesComponent } from "./components/main-view/navigation-categories/navigation-categories.component";
import { MainViewComponent } from "./components/main-view/main-view.component";
import { HeaderComponent } from "./components/main-view/header/header.component";
import { FooterComponent } from "./components/main-view/footer/footer.component";
import { AuthService } from "./services/auth.service";
import { FourOhFourComponent } from "./components/four-oh-four/four-oh-four.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { ProductsListComponent } from "./components/main-view/products-list/products-list.component";
import { ProductFormComponent } from "./components/admin-dashboard/product-form/product-form.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { UserFormComponent } from "./components/user/user-form/user-form.component";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { ProductManagerComponent } from './components/admin-dashboard/product-manager/product-manager.component';
import { SidebarComponent } from './components/admin-dashboard/sidebar/sidebar.component';
import { ProductsListFormComponent } from './components/admin-dashboard/products-list-form/products-list-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UserComponent,
    ProductPageComponent,
    NavigationComponent,
    NavigationCategoriesComponent,
    MainViewComponent,
    HeaderComponent,
    FooterComponent,
    FourOhFourComponent,
    SignInComponent,
    SignUpComponent,
    ProductsListComponent,
    ProductFormComponent,
    AboutUsComponent,
    UserFormComponent,
    AdminDashboardComponent,
    ProductManagerComponent,
    SidebarComponent,
    ProductsListFormComponent,
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
