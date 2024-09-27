import { Component } from '@angular/core';
import { projectConstants } from '../../app.component';

@Component({
  selector: 'app-tile-gallary',
  standalone: true,
  imports: [],
  templateUrl: './tile-gallary.component.html',
  styleUrl: './tile-gallary.component.scss'
})
export class TileGallaryComponent {
  public iurltVariables = projectConstants.projectImages;
}
