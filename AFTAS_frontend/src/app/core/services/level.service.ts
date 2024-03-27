import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getSomeData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/level`);
  }

  getOneLevel(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/level/`+id);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/level`, data);
  }

  putData(data: any,id:number): Observable<any> {
    return this.http.put(`${this.apiUrl}/level/`+id, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/level/${id}`);
  }
}
