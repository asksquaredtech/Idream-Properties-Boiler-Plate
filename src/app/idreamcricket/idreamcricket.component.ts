import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import this
declare var $: any;
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-idreamcricket',
  imports: [RouterModule],
  templateUrl: './idreamcricket.component.html',
  styleUrl: './idreamcricket.component.css'
})
export class IdreamcricketComponent extends AppComponent{
  
}
