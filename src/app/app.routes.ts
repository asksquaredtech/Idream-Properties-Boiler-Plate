import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { IdreamcinemasComponent } from './idreamcinemas/idreamcinemas.component';
import { IdreamcricketComponent } from './idreamcricket/idreamcricket.component';
import { IdreampropertiesComponent } from './idreamproperties/idreamproperties.component';
import { JointventureComponent } from './jointventure/jointventure.component';
import { IdreamvistaraComponent } from './idreamvistara/idreamvistara.component';

export const routes: Routes = [
    // Avoid creating components with '-, ,' in the name. Create components without empty space
    // NOTE: It might cause issues in routing and location
    {path:'home', component: HomepageComponent},
    {path:'second', component: SecondpageComponent}, //test page do not delete
    {path:'contact', component: ContactpageComponent},
    {path:'cinemas', component: IdreamcinemasComponent},
    {path:'TiruppurTamilans', component: IdreamcricketComponent},
    {path:'Properties', component: IdreampropertiesComponent},
    {path:'jointventures', component: JointventureComponent},
    {path:'vistara',component:IdreamvistaraComponent},

    
    {path:'**', redirectTo: 'home'}
];
