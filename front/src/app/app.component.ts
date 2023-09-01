import { Component } from "@angular/core"; 
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "fodmapStore";
  isAboutUsPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isAboutUsPage = this.isRouteAboutUs(event.url);
      }
    });
  }

  isRouteAboutUs(url: string): boolean {
    return url.includes('/about-us');
  }
}
