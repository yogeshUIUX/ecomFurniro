import { Component } from '@angular/core';
import { BreadcrumbBannerComponent } from "../../components/breadcrumb-banner/breadcrumb-banner.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BreadcrumbBannerComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
