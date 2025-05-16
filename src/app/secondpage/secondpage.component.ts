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
  matches: any[] = [];
  private apiUrl = 'https://cricbuzz-cricket2.p.rapidapi.com/teams/v1/861/results';

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
