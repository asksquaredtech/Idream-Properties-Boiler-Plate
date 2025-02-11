import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-idreamproperties',
  imports: [],
  templateUrl: './idreamproperties.component.html',
  styleUrl: './idreamproperties.component.css'
})
export class IdreampropertiesComponent {
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

    this.setupFormSubmit();
  }

  setupFormSubmit() {
    const form = document.getElementById('contactForm') as HTMLFormElement;
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission (no page redirect)
        this.submitForm(form);
      });
    }
  }

  submitForm(form: HTMLFormElement) {
    const formData = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    .then((response) => {
      if (response.ok) {
        this.showSuccessMessage();
        form.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    })
    .catch((error) => {
      alert('Error occurred: ' + error.message);
    });
  }

  showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
      successMessage.style.display = 'block';
    }
  }
}
