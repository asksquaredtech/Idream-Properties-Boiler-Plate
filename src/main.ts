import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Import your standalone AppComponent
import { appConfig } from './app/app.config'; // Import your app configuration if needed

// Bootstrap the application with the standalone AppComponent
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
