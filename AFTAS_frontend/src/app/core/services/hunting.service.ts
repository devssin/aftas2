import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HuntingReq } from '../models/HuntingReq.model';

@Injectable({
  providedIn: 'root'
})
export class HuntingService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getSomeData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/hunting`);
  }

  getOneHunt(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/hunting/`+id);
  }

  getByCompetition(id:String): Observable<any> {
    return this.http.get(`${this.apiUrl}/hunting/competition/`+id);
  }

  postData(data: HuntingReq): Observable<any> {
    return this.http.post(`${this.apiUrl}/hunting`,data);
  }

  putData(data: any,id:number): Observable<any> {
    return this.http.put(`${this.apiUrl}/hunting/`+id, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/hunting/${id}`);
}
} 
