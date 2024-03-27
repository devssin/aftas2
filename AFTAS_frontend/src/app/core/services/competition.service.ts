import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getSomeData(page:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/competition/all?size=6&page=`+page);
  }

  getOneCompetition(id:any): Observable<any> {
    return this.http.get(`${this.apiUrl}/competition/`+id);
  }

  getCompetitionsByEtat(etat:any,page:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/competition/etat/`+etat+`?size=6&page=`+page);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/competition`,data);
  }

  putData(data: any,id:String): Observable<any> {
    return this.http.put(`${this.apiUrl}/competition/`+id, data);
  }

  deleteData(id: String): Observable<any> {
    return this.http.delete(`${this.apiUrl}/competition/${id}`);
  }
}
