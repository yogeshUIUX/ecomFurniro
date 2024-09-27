import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-banner',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumb-banner.component.html',
  styleUrl: './breadcrumb-banner.component.scss'
})
export class BreadcrumbBannerComponent {
  @Input() homePageUrl: string = '/';  // Default value for home page
  @Input() page: string = '';
}
