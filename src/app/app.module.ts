import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Import your standalone component
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from '../environments/environments';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    AppComponent, // Import AppComponent here
  ],
  providers: [],
})
export class AppModule { 
  
}
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Bootstrap the application
bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));