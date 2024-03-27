import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RankingReq } from '../models/RankingReq.model';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  postData(data: RankingReq): Observable<any> {
    return this.http.post(`${this.apiUrl}/ranking`,data);
  }
  deleteData(competitionCode:String,memberNum:number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/ranking/`+competitionCode+"/"+memberNum);
  }
  getData(competitionCode:String|null): Observable<any> {
    return this.http.get(`${this.apiUrl}/ranking/done/`+competitionCode);
  }
  
}
