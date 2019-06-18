import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = '/api/v1/cliente';

  constructor(private http: HttpClient) { }

  getCliente(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCliente(cliente: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, cliente);
  }

  updateCliente(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAllCliente(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
