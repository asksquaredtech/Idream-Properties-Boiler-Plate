import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-formsuccess',
  imports: [],
  templateUrl: './formsuccess.component.html',
  styleUrl: './formsuccess.component.css'
})
export class FormsuccessComponent implements AfterViewInit {

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

    // Initialize Carousel
    $(document).ready(function () {
      $(".header-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        nav: true,
        navText: [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>'
        ]
      });

      $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav: true,
        navText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
          0: {
            items: 1
          },
          992: {
            items: 2
          }
        }
      });
    });

  }
  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  createConfetti() {
    const colors = ['#FF6F00', '#FFB74D', '#FFC107', '#FFE082', '#FFECB3'];
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.animation = `confetti 3s ease-out ${Math.random() * 2}s forwards`;
      document.body.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 3000);
    }
  }
}
