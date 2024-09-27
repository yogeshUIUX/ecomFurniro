import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { projectConstants } from '../../app.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  public iProjectVariables = projectConstants.projectVariables;
}
