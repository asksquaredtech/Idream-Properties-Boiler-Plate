import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import 'zone.js';
import { GoogleTagManagerService } from 'angular-google-tag-manager';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Idreams';

  constructor(private gtmService: GoogleTagManagerService) {}

  trackEvent(action: string, label: string) {
    const gtmTag = {
      event: 'user_action',
      action: action,
      label: label,
    };
    this.gtmService.pushTag(gtmTag);
  }
}
