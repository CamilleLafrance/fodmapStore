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
import { ProductFormComponent } from "./components/admin-dashboard/product-admin/product-form/product-form.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { UserFormComponent } from "./components/user/user-form/user-form.component";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { ProductManagerComponent } from "./components/admin-dashboard/product-admin/product-manager/product-manager.component";
import { SidebarComponent } from "./components/admin-dashboard/product-admin/sidebar/sidebar.component";
import { ProductsListFormComponent } from "./components/admin-dashboard/product-admin/products-list-form/products-list-form.component";
import { SidebarUserComponent } from "./components/user/sidebar-user/sidebar-user.component";
import { UserDashboardComponent } from "./components/user/user-dashboard/user-dashboard.component";
import { ProductModifyComponent } from "./components/admin-dashboard/product-admin/product-modify/product-modify.component";
import { UserManagerComponent } from "./components/admin-dashboard/user-admin/user-manager/user-manager.component";
import { SidebarUserAdminComponent } from "./components/admin-dashboard/user-admin/sidebar-user-admin/sidebar-user-admin.component";
import { UsersListFormComponent } from "./components/admin-dashboard/user-admin/users-list-form/users-list-form.component";
import { SidebarCategoryAdminComponent } from './components/admin-dashboard/category-admin/sidebar-category-admin/sidebar-category-admin.component';
import { CategoryManagerComponent } from './components/admin-dashboard/category-admin/category-manager/category-manager.component';
import { CategoriesListFormComponent } from './components/admin-dashboard/category-admin/categories-list-form/categories-list-form.component';
import { CategoryFormComponent } from './components/admin-dashboard/category-admin/category-form/category-form.component';
import { CategoryModifyComponent } from './components/admin-dashboard/category-admin/category-modify/category-modify.component';

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
    SidebarUserComponent,
    UserDashboardComponent,
    ProductModifyComponent,
    UserManagerComponent,
    SidebarUserAdminComponent,
    UsersListFormComponent,
    SidebarCategoryAdminComponent,
    CategoryManagerComponent,
    CategoriesListFormComponent,
    CategoryFormComponent,
    CategoryModifyComponent,
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
