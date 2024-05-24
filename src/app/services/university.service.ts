import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private baseUrl = 'http://universities.hipolabs.com/search';

  constructor(private http: HttpClient) {}

  getUniversitiesByCountry(country: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?country=${country}`);
  }

  getUniversitiesByCountryAndName(country: string, name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?country=${country}&name=${name}`);
  }
}