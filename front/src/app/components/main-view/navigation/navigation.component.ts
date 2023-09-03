import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { ShoppingCartCommunicationService } from "src/app/services/shopping-cart-communication.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent {
  authStatus: boolean = false;
  isNavbarCollapsed: boolean = true;
  productsCount: number = 0;

  constructor(
    private router: Router,
    private authService: AuthService,
    private shoppingCartService: ShoppingCartCommunicationService
  ) {}

  ngOnInit() {
    this.authService.authStatus$.subscribe((status) => {
      this.authStatus = status;
    });
    this.shoppingCartService.productsCount$.subscribe((count) => {
      this.productsCount = count;
    });
    this.isNavbarCollapsed = true;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.collapseNavbar();
      }
    });
  }

  collapseNavbar() {
    const navbarToggler = document.querySelector("#navbarToggler");
    if (navbarToggler instanceof HTMLElement) {
      if (!navbarToggler.classList.contains("collapsed")) {
        navbarToggler.click();
      }
    }
  }

  onSignOut() {
    this.authService.setAuthStatus(false);
    this.router.navigate(["main-view"]);
  }
}
