import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { UniversityService } from '../services/university.service';

interface University {
  name: string;
  'state-province': string | null;
  web_pages: string[];
}

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule
  ]
})
export class SearchPageComponent implements OnInit {
  username = '';
  country = '';
  otherCountry = '';
  universityName = '';
  searchCount = 0;
  countries = ['China', 'Canada', 'United Kingdom', 'India', 'Australia', 'Germany', 'France'];
  universities: University[] = [];

  constructor(private router: Router, private universityService: UniversityService) {}

  ngOnInit() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
      this.searchCount = parseInt(localStorage.getItem(`${this.username}-searchCount`) || '0', 10);
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  search() {
    this.searchCount++;
    localStorage.setItem(`${this.username}-searchCount`, this.searchCount.toString());

    const searchCountry = this.country || this.otherCountry;
    if (searchCountry) {
      if (this.universityName) {
        this.universityService.getUniversitiesByCountryAndName(searchCountry, this.universityName).subscribe(data => {
          this.universities = data;
        });
      } else {
        this.universityService.getUniversitiesByCountry(searchCountry).subscribe(data => {
          this.universities = data;
        });
      }
    }
  }
}
