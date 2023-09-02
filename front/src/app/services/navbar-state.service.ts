import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NavbarStateService {
  private isNavbarCollapsed = true;

  constructor() {}

  setNavbarState(isCollapsed: boolean) {
    this.isNavbarCollapsed = isCollapsed;
  }

  getNavbarState() {
    return this.isNavbarCollapsed;
  }
}
