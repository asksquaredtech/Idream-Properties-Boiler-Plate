import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';

export const routes: Routes = [
    {path:'home', component: HomepageComponent},
    {path:'second', component: SecondpageComponent},
    {path:'**', redirectTo: 'home'}
];
