import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
export let projectConstants = environment.projectConstants;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }
  title = 'furniro';
  http = inject(HttpClient);

  pageName: string = '';

  ngOnInit(): void {
    // Dynamically setting the page name based on the active route
    this.route.data.subscribe((data) => {
      this.pageName = data['pageTitle'] || 'Unknown Page';
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);  // Scroll to top
      }
    });
  }
}