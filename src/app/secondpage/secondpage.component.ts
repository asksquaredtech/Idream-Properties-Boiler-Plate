import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-secondpage',
  standalone: true, // 👈 Add this to mark it as standalone
  imports: [CommonModule, HttpClientModule], // 👈 Import HttpClientModule here
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent {
  // matches: any[] = [];
  private apiUrl = 'https://cricbuzz-cricket2.p.rapidapi.com/teams/v1/861/results';
  //private apiUrl = '';
  IDTTmatches = [
    { date: '6 JUNE', time: '7:15 PM', team1: 'IDTT', team2: 'CSG', venue: 'COIMBATORE' },
    { date: '8 JUNE', time: '7:15 PM', team1: 'IDTT', team2: 'DD', venue: 'COIMBATORE' },
    { date: '13 JUNE', time: '7:15 PM', team1: 'IDTT', team2: 'SKM SS', venue: 'SALEM' },
    { date: '15 JUNE', time: '3:15 PM', team1: 'TGC', team2: 'IDTT', venue: 'SALEM' },
    { date: '22 JUNE', time: '7:15 PM', team1: 'SMP', team2: 'IDTT', venue: 'TIRUNELVELI' },
    { date: '24 JUNE', time: '7:15 PM', team1: 'LKK', team2: 'IDTT', venue: 'TIRUNELVELI' },
    { date: '29 JUNE', time: '3:15 PM', team1: 'IDTT', team2: 'NRK', venue: 'DINDIGUL' },
  ];
  matches : any[] = [
    {
      team1Name: 'IDream Tiruppur Tamizhans',
      team1Score: '180/5',
      team1Overs: '20.0',
      team2Name: 'Dindigul Dragons',
      team2Score: '175/7',
      team2Overs: '20.0',
      date: '2025-05-20',
      time: '19:30',
      venue: 'Wankhede Stadium, Mumbai',
      status: 'Mumbai Indians won by 5 runs'
    },
    {
      team1Name: 'Lyca Kovai Kings',
      team1Score: '200/3',
      team1Overs: '20.0',
      team2Name: 'IDream Tiruppur Tamizhans',
      team2Score: '198/6',
      team2Overs: '20.0',
      date: '2025-05-21',
      time: '19:30',
      venue: 'M. Chinnaswamy Stadium, Bangalore',
      status: 'Royal Challengers Bangalore won by 2 runs'
    },
    {
      team1Name: 'IDream Tiruppur Tamizhans',
      team1Score: '150/8',
      team1Overs: '20.0',
      team2Name: 'Nellai Royal Kings',
      team2Score: '151/5',
      team2Overs: '19.4',
      date: '2025-05-22',
      time: '19:30',
      venue: 'Arun Jaitley Stadium, Delhi',
      status: 'Sunrisers Hyderabad won by 5 wickets'
    }
    // Add more matches as needed
  ];
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '8810bb3697msh7760e535fa79cc6p17e37djsn10b632093e41',
    'X-RapidAPI-Host': 'cricbuzz-cricket2.p.rapidapi.com',
    'Accept': 'application/json'
  });

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.getLatestMatches().subscribe((data) => {
      this.matches = data;
    });
  }

  // Define the mapping of team names to their respective logo URLs
teamLogos: { [key: string]: string } = {
  'IDream Tiruppur Tamizhans': 'https://lh3.googleusercontent.com/d/1z2uRjAwFp7s2pxBwMRcC6RQVf8E09KCS?authuser=0',
  'Chepauk Super Gillies': 'https://lh3.googleusercontent.com/d/1880mOnW5_AtKaF4s2O_O4X6QPybXHx1z?authuser=0',
  'Dindigul Dragons': 'https://lh3.googleusercontent.com/d/1S5T7tb-ILpo5w798FIMzHfHAqfFDQk4s?authuser=0',
  'SKM Salem Spartans': 'https://lh3.googleusercontent.com/d/1l5adfwFEUoHJ_JMK8oCak1zE3mPhqQb3?authuser=0',
  'Trichy Grand Cholas': 'https://lh3.googleusercontent.com/d/1D2LQJ9jmwi0gT_Xzry99G3Qm0FYdpHOn?authuser=0',
  'Siechem Madurai Panthers': 'https://tnplmcfeeds.s3.ap-south-1.amazonaws.com/teamlogos/SMP.png',
  'Lyca Kovai Kings': 'https://tnplmcfeeds.s3.ap-south-1.amazonaws.com/teamlogos/LKK.png',
  'Nellai Royal Kings': 'https://tnplmcfeeds.s3.ap-south-1.amazonaws.com/teamlogos/NRK.png',
  // Add more teams as needed
};

// Function to retrieve the logo URL based on the team name
getTeamLogo(teamName: string): string {
  return this.teamLogos[teamName] || 'https://via.placeholder.com/50';
}
pointsTable = [
  { team: 'IDream Tiruppur Tamizhans', played: 5, won: 4, lost: 1, points: 8, netrr: '+0.85' },
  { team: 'Lyca Kovai Kings', played: 5, won: 4, lost: 1, points: 8, netrr: '+0.76' },
  { team: 'Chepauk Super Gillies', played: 5, won: 3, lost: 2, points: 6, netrr: '+0.52' },
  { team: 'Dindigul Dragons', played: 4, won: 2, lost: 2, points: 4, netrr: '+0.31' },
  { team: 'SKM Salem Spartans', played: 4, won: 2, lost: 2, points: 4, netrr: '-0.21' },
  { team: 'Trichy Grand Cholas', played: 4, won: 1, lost: 3, points: 2, netrr: '-0.47' },
  { team: 'Siechem Madurai Panthers', played: 4, won: 1, lost: 3, points: 2, netrr: '-0.66' },
  { team: 'Nellai Royal Kings', played: 4, won: 1, lost: 3, points: 2, netrr: '-0.92' }
];
  fixtures = [
    {
      date: '06 JUN 2025',
      time: '19:15',
      venue: 'Sri Ramakrishna College Cricket Ground, Coimbatore',
      team1: {
        name: 'IDream Tiruppur Tamizhans',
        logo: 'https://lh3.googleusercontent.com/d/1z2uRjAwFp7s2pxBwMRcC6RQVf8E09KCS?authuser=0'
      },
      team2: {
        name: 'Chepauk Super Gillies',
        logo: 'https://lh3.googleusercontent.com/d/1880mOnW5_AtKaF4s2O_O4X6QPybXHx1z?authuser=0'
      }
    },
    {
      date: '08 JUN 2025',
      time: '19:15',
      venue: 'Sri Ramakrishna College Cricket Ground, Coimbatore',
      team1: {
        name: 'IDream Tiruppur Tamizhans',
        logo: 'https://lh3.googleusercontent.com/d/1z2uRjAwFp7s2pxBwMRcC6RQVf8E09KCS?authuser=0'
      },
      team2: {
        name: 'Dindigul Dragons',
        logo: 'https://lh3.googleusercontent.com/d/1S5T7tb-ILpo5w798FIMzHfHAqfFDQk4s?authuser=0'
      }
    },
    {
      date: '13 JUN 2025',
      time: '19:15',
      venue: 'Salem Cricket Foundation Ground, Salem',
      team1: {
        name: 'IDream Tiruppur Tamizhans',
        logo: 'https://lh3.googleusercontent.com/d/1z2uRjAwFp7s2pxBwMRcC6RQVf8E09KCS?authuser=0'
      },
      team2: {
        name: 'SKM Salem Spartans',
        logo: 'https://lh3.googleusercontent.com/d/1l5adfwFEUoHJ_JMK8oCak1zE3mPhqQb3?authuser=0'
      }
    },
    {
      date: '15 JUN 2025',
      time: '15:15',
      venue: 'Salem Cricket Foundation Ground, Salem',
      team1: {
        name: 'Trichy Grand Cholas',
        logo: 'https://lh3.googleusercontent.com/d/1D2LQJ9jmwi0gT_Xzry99G3Qm0FYdpHOn?authuser=0'
      },
      team2: {
        name: 'IDream Tiruppur Tamizhans',
        logo: 'https://lh3.googleusercontent.com/d/1z2uRjAwFp7s2pxBwMRcC6RQVf8E09KCS?authuser=0'
      }
    },
    {
      date: '22 JUN 2025',
      time: '19:15',
      venue: 'Chennai Super Kings Ground, Sankar Nagar, Tirunelveli',
      team1: {
        name: 'S Madurai Panthers',
        logo: 'https://tnplmcfeeds.s3.ap-south-1.amazonaws.com/teamlogos/SMP.png'
      },
      team2: {
        name: 'IDream Tiruppur Tamizhans',
        logo: 'https://lh3.googleusercontent.com/d/1z2uRjAwFp7s2pxBwMRcC6RQVf8E09KCS?authuser=0'
      }
    },
    {
      date: '24 JUN 2025',
      time: '19:15',
      venue: 'Chennai Super Kings Ground, Sankar Nagar, Tirunelveli',
      team1: {
        name: 'Lyca Kovai Kings',
        logo: 'https://tnplmcfeeds.s3.ap-south-1.amazonaws.com/teamlogos/LKK.png'
      },
      team2: {
        name: 'IDream Tiruppur Tamizhans',
        logo: 'https://lh3.googleusercontent.com/d/1z2uRjAwFp7s2pxBwMRcC6RQVf8E09KCS?authuser=0'
      }
    },
    {
      date: '29 JUN 2025',
      time: '15:15',
      venue: 'NPR College Ground, Dindigul',
      team1: {
        name: 'IDream Tiruppur Tamizhans',
        logo: 'https://lh3.googleusercontent.com/d/1z2uRjAwFp7s2pxBwMRcC6RQVf8E09KCS?authuser=0'
      },
      team2: {
        name: 'Nellai Royal Kings',
        logo: 'https://tnplmcfeeds.s3.ap-south-1.amazonaws.com/teamlogos/NRK.png'
      }
    }
  ];

  public getLatestMatches(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl, { headers: this.headers }).pipe(
      map((response) => {
        const matches = response.teamMatchesData[0]?.matchDetailsMap?.match || [];
  
        // Transforming data for UI
        return matches.slice(0, 3).map((match: any) => ({
          team1Name: match.matchInfo.team1.teamName,
          team1Score: `${match.matchScore.team1Score.inngs1.runs}/${match.matchScore.team1Score.inngs1.wickets}`,
          team1Overs: match.matchScore.team1Score.inngs1.overs,
  
          team2Name: match.matchInfo.team2.teamName,
          team2Score: `${match.matchScore.team2Score.inngs1.runs}/${match.matchScore.team2Score.inngs1.wickets}`,
          team2Overs: match.matchScore.team2Score.inngs1.overs,
  
          status: match.matchInfo.status,
          venue: `${match.matchInfo.venueInfo.ground}, ${match.matchInfo.venueInfo.city}`
        }));
      })
    );
  }
  
}
