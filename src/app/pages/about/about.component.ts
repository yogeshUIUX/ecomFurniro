import { Component } from '@angular/core';
import { BreadcrumbBannerComponent } from "../../components/breadcrumb-banner/breadcrumb-banner.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BreadcrumbBannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public aboutDetails = {
    aboutTitle: "About",

  }
}
