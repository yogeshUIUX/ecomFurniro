import { Component } from '@angular/core';
import { projectConstants } from '../../app.component';

@Component({
  selector: 'app-product-filters',
  standalone: true,
  imports: [],
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.scss'
})
export class ProductFiltersComponent {
  public iProjectVariables = projectConstants.projectVariables;
}
