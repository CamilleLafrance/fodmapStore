import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainViewComponent } from "./components/main-view/main-view.component";
import { AuthComponent } from "./components/auth/auth.component";
import { ProductPageComponent } from "./components/product-page/product-page.component";
import { UserComponent } from "./components/user/user.component";
import { FourOhFourComponent } from "./components/four-oh-four/four-oh-four.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";

const routes: Routes = [
  { path: "", component: MainViewComponent },
  { path: "main-view", component: MainViewComponent },
  { path: "sign-in", component: SignInComponent },
  { path: "auth", component: AuthComponent },
  { path: "products/:id", component: ProductPageComponent },
  { path: "user-profile", component: UserComponent },
  { path: "not-found", component: FourOhFourComponent },
  { path: "**", redirectTo: "/not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
