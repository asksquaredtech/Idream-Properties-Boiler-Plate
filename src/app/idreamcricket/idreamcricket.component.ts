import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import this
declare var $: any;

@Component({
  selector: 'app-idreamcricket',
  imports: [RouterModule],
  templateUrl: './idreamcricket.component.html',
  styleUrl: './idreamcricket.component.css'
})
export class IdreamcricketComponent {
  ngAfterViewInit() {
    // Spinner
    var spinner = function () {
      setTimeout(function () {
        if ($('#spinner').length > 0) {
          $('#spinner').removeClass('show');
        }
      }, 1);
    };
    spinner();
  }
}
