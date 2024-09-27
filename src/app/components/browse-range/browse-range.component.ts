import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { browseProducts } from '../../../assets/JSONDATA/browserRange.json'
import { CommonModule } from '@angular/common';
import { projectConstants } from '../../app.component';

@Component({
  selector: 'app-browse-range',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './browse-range.component.html',
  styleUrl: './browse-range.component.scss'
})
export class BrowseRangeComponent {
  public iProjectVariables = projectConstants.projectVariables;
  http = inject(HttpClient);
  browseProducts: {
    title: string,
    url: string,
    thumbnail: string
  }[] = browseProducts;
}
