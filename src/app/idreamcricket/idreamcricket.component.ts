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
      name: 'SAI',
      surname: 'KISHORE',
      role: ['All - Rounder', 'Captain'],
      country: 'India, Gujarat Titans, Tamilnadu, IDTT',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: '../../img/IDTT Webp/Sai Kishore.webp'
    },
    {
      name: 'NATARAJAN',
      surname: 'T',
      role: ['Bowler'],
      country: 'India, Delhi Capitals, Tamilnadu, IDTT',
      flag: '🇮🇳',
      matches: 7,
      runs: 224,
      imageUrl: '../../img/IDTT Webp/T Natarajan.webp'
    },
    {
      name: 'TUSHAR',
      surname: 'RAHEJA',
      role: ['WK - Batsman, Opener'],
      country: 'Tamilnadu, IDTT',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: '../../img/IDTT Webp/Tushar Raheja.webp'
    },
    {
      name: 'MOHAMMED',
      surname: 'ALI',
      role: ['All - Rounder'],
      country: 'Tamilnadu, IDTT',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: '../../img/IDTT Webp/Mohamed Ali.webp'
    },
    {
      name: 'AMITH',
      surname: 'SATVIK',
      role: ['WK - Batsman, Opener'],
      country: 'IDTT',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: '../../img/IDTT Webp/Amith Satvik.webp'
    },
    {
      name: 'SURYA',
      surname: 'B',
      role: ['Bowler, Spin'],
      country: 'IDTT',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: '../../img/IDTT Webp/Surya B.webp'
    },
    {
      name: 'SILAMBARSAN',
      surname: '',
      role: ['All - Rounder'],
      country: 'IDTT',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: '../../img/IDTT Webp/Silambarasan.webp'
    },
    {
      name: 'SASIDEV',
      surname: 'U',
      role: ['Batsman'],
      country: 'IDTT',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: '../../img/IDTT Webp/Sasidev U.webp'
    },
    {
      name: 'RAJKUMAR',
      surname: '',
      role: ['Batsman'],
      country: 'IDTT',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: '../../img/IDTT Webp/Rajkumar.webp'
    },
    {
      name: 'RADHAKRISHNAN',
      surname: 'S',
      role: ['Batsman'],
      country: 'IDTT',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: '../../img/IDTT Webp/Radhakrishnan S.webp'
    },
    {
      name: 'PRADOSH',
      surname: 'RANJAN PAUL',
      role: ['Batsman'],
      country: 'Tamilnadu, IDTT',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: '../../img/IDTT Webp/Pradosh Ranjan Paul.webp'
    },
    {
      name: 'MOHAN',
      surname: 'PRASATH',
      role: ['Bowler, Spin'],
      country: 'IDTT',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: '../../img/IDTT Webp/Mohan Prasath.webp'
    },
    
    {
      name: 'MATHIVANAN',
      surname: '',
      role: ['All - Rounder'],
      country: 'IDTT',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: '../../img/IDTT Webp/Mathivanan.webp'
    },
    {
      name: 'KANIBALAN',
      surname: '',
      role: ['Batsman'],
      country: 'IDTT',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: '../../img/IDTT Webp/Kanibalan.webp'
    },
    {
      name: 'EASKIMUTHU',
      surname: '',
      role: ['Batsman'],
      country: 'IDTT',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: '../../img/IDTT Webp/Esakkimuthu.webp'
    },
    {
      name: 'DARYL S',
      surname: 'FERRARIO',
      role: ['All - Rounder'],
      country: 'IDTT',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: '../../img/IDTT Webp/Daryl S Ferrario.webp'
    },
    {
      name: 'ANOVANKAR',
      surname: '',
      role: ['Batsman'],
      country: 'IDTT',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: '../../img/IDTT Webp/Anovankar.webp'
    },
    {
      name: 'ACHYUTH',
      surname: 'CV',
      role: ['Batsman'],
      country: 'IDTT',
      flag: '🇮🇳',
      matches: 6,
      runs: 350,
      imageUrl: '../../img/IDTT Webp/Achyuth CV.webp'
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
