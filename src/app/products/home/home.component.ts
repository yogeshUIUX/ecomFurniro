import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
}
