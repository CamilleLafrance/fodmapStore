import { Component, Input } from "@angular/core";
import { Product } from "src/model/product/product";
import { ProductService } from "./services/product.service";
import { NavigationEnd, Router } from "@angular/router";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "fodmapStore";

  authStatus: boolean | undefined;
  isAboutUsPage: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isAboutUsPage = this.isRouteAboutUs(event.url);
      }
    });
  }

  isRouteAboutUs(url: string): boolean {
    return url.includes('/about-us');
  }

  onSignIn() {
    this.authService.signIn().then(() => {
      this.authStatus = this.authService.isAuth;
      this.router.navigate(["user-profile"]);
    });
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
    this.router.navigate(['main-view']);
  }
}
