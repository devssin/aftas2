import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getSomeData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/member`);
  }

  getOneFish(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/member/`+id);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/member`,data);
  }

  putData(data: any,id:number): Observable<any> {
    return this.http.put(`${this.apiUrl}/member/`+id, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/member/${id}`);
  }
}
