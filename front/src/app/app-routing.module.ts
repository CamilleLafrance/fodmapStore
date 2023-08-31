import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainViewComponent } from "./components/main-view/main-view.component";
import { ProductPageComponent } from "./components/product-page/product-page.component";
import { UserComponent } from "./components/user/user.component";
import { FourOhFourComponent } from "./components/four-oh-four/four-oh-four.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { ProductFormComponent } from "./components/admin-dashboard/product-form/product-form.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { UserFormComponent } from "./components/user/user-form/user-form.component";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { ProductsListFormComponent } from "./components/admin-dashboard/products-list-form/products-list-form.component";
import { ProductModifyComponent } from "./components/admin-dashboard/product-modify/product-modify.component";

const routes: Routes = [
  { path: "", component: MainViewComponent },
  { path: "main-view", component: MainViewComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "sign-in", component: SignInComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "products/:id", component: ProductPageComponent },
  { path: "products-add", component: ProductFormComponent },
  { path: "products-modify", component: ProductModifyComponent },
  { path: "products-list-form", component: ProductsListFormComponent },
  { path: "admin-dashboard", component: AdminDashboardComponent },
  { path: "user-profile", component: UserComponent },
  { path: "user-form", component: UserFormComponent },
  { path: "not-found", component: FourOhFourComponent },
  { path: "**", redirectTo: "/not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
