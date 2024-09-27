import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { projectConstants } from '../app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public iProjectVariables = projectConstants.projectVariables;

  footerlinks: { label: string; link: string; icon: string; imgSrc: string }[] = [
    { label: 'Home', link: '/app-home', icon: '', imgSrc: '' },
    { label: 'Shop', link: '/app-shop', icon: '', imgSrc: '' },
    { label: 'About', link: '/app-about', icon: '', imgSrc: '' },
    { label: 'Contact', link: '/app-contact', icon: '', imgSrc: '' }
  ];
  footerHelplinks: { label: string; link: string; icon: string; imgSrc: string }[] = [
    { label: 'Payment Options', link: '', icon: '', imgSrc: '' },
    { label: 'Returns', link: '', icon: '', imgSrc: '' },
    { label: 'Privacy Policies', link: '', icon: '', imgSrc: '' },
  ];
  email: string = '';
  successMessage: string = '';

  onSubmit() {
    if (this.email) {
      this.successMessage = `Subscribed successfully with email: ${this.email}`;

      // Clear the input after submission
      this.email = '';

      // Clear the message after a few seconds (optional)
      setTimeout(() => this.successMessage = '', 3000);
    }
  }
}
