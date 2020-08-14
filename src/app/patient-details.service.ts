import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientDetailsService {

  constructor(private http: HttpClient) { }

  //SERVER_URL = "http://44.230.62.224:5000/forms";

  registerPatient = "http://localhost:5000/registerPatient";
  searchPatient = "http://localhost:5000/searchPatient";

  //registerPatient = "http://44.230.62.224:5000/registerPatient"
  //searchPatient = "http://44.230.62.224:5000/searchPatient";


  patientDetails(data) {

    console.log("service called")

    return this.http.post<any>(this.registerPatient, data, {
      reportProgress: true,
      observe: 'events'
    });
  }

  patientSearchDetails(data) {
    return this.http.post<any>(this.searchPatient, data, {
      reportProgress: true,
      observe: 'events'
    });


  }
}