import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FishService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getSomeData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/fish`);
  }

  getOneFish(id:String): Observable<any> {
    return this.http.get(`${this.apiUrl}/fish/`+id);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/fish`,data);
  }

  putData(data: any,id:String): Observable<any> {
    return this.http.put(`${this.apiUrl}/fish/`+id, data);
  }

  deleteData(id: String): Observable<any> {
    return this.http.delete(`${this.apiUrl}/fish/${id}`);
  }
}
