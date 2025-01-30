import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

export const routes: Routes = [
    // Avoid creating components with '-, ,' in the name. Create components without empty space
    // NOTE: It might cause issues in routing and location
    {path:'home', component: HomepageComponent},
    {path:'second', component: SecondpageComponent},
    {path:'contact', component: ContactpageComponent},
    {path:'**', redirectTo: 'home'}
];
