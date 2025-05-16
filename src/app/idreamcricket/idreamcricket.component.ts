import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { Component } from '@angular/core';
import { SecondpageComponent } from '../secondpage/secondpage.component';

@Component({
  selector: 'app-idreamcricket',
  standalone: true,
  imports: [RouterModule, CommonModule, SecondpageComponent],
  templateUrl: './idreamcricket.component.html',
  styleUrl: './idreamcricket.component.css',

})
export class IdreamcricketComponent extends AppComponent {
  currentIndex = 0;
  players = [
    {
      name: 'NATARAJAN',
      surname: 'T',
      role: ['Bowler', 'Captain'],
      country: 'India',
      flag: '🇮🇳',
      matches: 7,
      runs: 224,
      imageUrl: 'https://lh3.googleusercontent.com/d/18hIJhdxN9QI_pQyA5ymeW99e3JQb-HfB?authuser=0'
    },
    {
      name: 'SAI',
      surname: 'KISHORE',
      role: ['Batsman'],
      country: 'India',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: 'https://lh3.googleusercontent.com/d/1B9ZgzFOpmDK0c0OUE-5kzNxdbX_NR4pO?authuser=0'
    },
    {
      name: 'TUSHAR',
      surname: 'RAHEJA',
      role: ['Batsman'],
      country: 'India',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: 'https://lh3.googleusercontent.com/d/1VcZP8FJOn5gBdsYN4eAT3TlxW9Mw1xbP?authuser=0'
    },
    {
      name: 'SURYA',
      surname: 'B',
      role: ['Batsman'],
      country: 'India',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: 'https://lh3.googleusercontent.com/d/1NbfuMkeDr3KnYgmK34y88wyjtpEjNTGu?authuser=0'
    },
    {
      name: 'SILAMBARSAN',
      surname: '',
      role: ['Batsman'],
      country: 'India',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: 'https://lh3.googleusercontent.com/d/12-Bpd0j1Sp68g4AeVoGslcvZeDigLsDW?authuser=0'
    },
    {
      name: 'SASIDEV',
      surname: 'U',
      role: ['Batsman'],
      country: 'India',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: 'https://lh3.googleusercontent.com/d/1dheFfeJIgC3tPzhrghCtVIQ9Wmd6q4aZ?authuser=0'
    },
    {
      name: 'RAJKUMAR',
      surname: '',
      role: ['Batsman'],
      country: 'India',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: 'https://lh3.googleusercontent.com/d/1w0QNxzsMVqA84IdMuxbJJATvBO966Yes?authuser=0'
    },
    {
      name: 'RADHAKRISHNAN',
      surname: 'S',
      role: ['Batsman'],
      country: 'India',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: 'https://lh3.googleusercontent.com/d/1hZu4OTulmBWHrLJfcrNw0N7VI5er186w?authuser=0'
    },
    {
      name: 'PRADOSH',
      surname: 'RANJAN PAUL',
      role: ['Batsman'],
      country: 'India',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: 'https://lh3.googleusercontent.com/d/1AdOWllI088FX8prI9S3gOyP8jtH062na?authuser=0'
    },
    {
      name: 'MOHAN',
      surname: 'PRASATH',
      role: ['Batsman'],
      country: 'India',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: 'https://lh3.googleusercontent.com/d/1-rnm4zzvJO7TD09cY2JHCsvOdRDp-F5m?authuser=0'
    },
    {
      name: 'MOHAMMED',
      surname: 'ALI',
      role: ['Batsman'],
      country: 'India',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: 'https://lh3.googleusercontent.com/d/184wCaW_xnD_AFNPl-iyKfn8i7eMzKOrf?authuser=0'
    },
    {
      name: 'MATHIVANAN',
      surname: '',
      role: ['Batsman'],
      country: 'India',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: 'https://lh3.googleusercontent.com/d/1Iqgdtc7VUkzto2NElRbUch_-Lf0F-wMN?authuser=0'
    },
    {
      name: 'KANIBALAN',
      surname: '',
      role: ['Batsman'],
      country: 'India',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: 'https://lh3.googleusercontent.com/d/1jjyLDMign0wfxBF6_1AlCOS6-lDW-u8r?authuser=0'
    },
    {
      name: 'EASKIMUTHU',
      surname: '',
      role: ['Batsman'],
      country: 'India',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: 'https://lh3.googleusercontent.com/d/1xYhEbHZyvEp71c7KPU1TGnpHK326eTmh?authuser=0'
    },
    {
      name: 'DARYL S',
      surname: 'FERRARIO',
      role: ['Batsman'],
      country: 'India',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: 'https://lh3.googleusercontent.com/d/1pofIvARbxetPVrCEykXf8LKHIKAkqHpI?authuser=0'
    },
    {
      name: 'ANOVANKAR',
      surname: '',
      role: ['Batsman'],
      country: 'India',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: 'https://lh3.googleusercontent.com/d/1VQz65fO3wJMph0GbngbrMmfqaJNNNLMy?authuser=0'
    },
    {
      name: 'AMITH',
      surname: 'SATVIK',
      role: ['Batsman'],
      country: 'India',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: 'https://lh3.googleusercontent.com/d/1rLDW5jnwACWdCoOMDoBsrXoMt7Q8AaXp?authuser=0'
    },
    {
      name: 'ACHYUTH',
      surname: 'CV',
      role: ['Batsman'],
      country: 'India',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: 'https://lh3.googleusercontent.com/d/15G2c9sRlzzlb7vEXUNb4TqYhjOSEKOLd?authuser=0'
    }
  ];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.players.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.players.length) % this.players.length;
  }

  get currentPlayer() {
    return this.players[this.currentIndex];
  }
  
}
