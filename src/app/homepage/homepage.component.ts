import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements AfterViewInit{
  ngAfterViewInit() {
    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
      });
    });
  }
}

