import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Import your standalone component
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from '../environments/environments';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';
import { GtmService } from './gtm.service';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    GoogleTagManagerModule.forRoot({
      id: 'AW-16827617620',
    }),
  ],
  bootstrap: [AppComponent],
  providers: [{provide: 'googleTagManagerId', useValue:"AW-16827617620"}],
})
export class AppModule {
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Bootstrap the application
bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));