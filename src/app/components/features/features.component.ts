import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  featureData = {
    "featureRows": [
      {
        "id": 1,
        "title": "High Quality",
        "subTitle": "crafted from top materials",
        "thumbnail": "../../../assets/icons/trophy1.svg"
      },
      {
        "id": 2,
        "title": "Warranty Protection",
        "subTitle": "Over 2 years",

        "thumbnail": "../../../assets/icons/guarantee.svg"
      },
      {
        "id": 3,
        "title": "Free Shipping",
        "subTitle": "Order over 150 $",

        "thumbnail": "../../../assets/icons/shipping.svg"
      },
      {
        "id": 3,
        "title": "24 / 7 Support",
        "subTitle": "Dedicated support",

        "thumbnail": "../../../assets/icons/customer-support.svg"
      },
    ]
  }
}
