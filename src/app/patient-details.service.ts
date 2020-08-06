import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientDetailsService {

  constructor(private http: HttpClient) { }

  SERVER_URL = "http://44.230.62.224:5000/forms";

  patientDetails(data) {
    return this.http.post<any>(this.SERVER_URL, data, {
      reportProgress: true,
      observe: 'events'
    });
  }
}