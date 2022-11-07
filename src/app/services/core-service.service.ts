import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompaniesInterface } from './../interfaces/CompaniesInterface';

@Injectable({
  providedIn: 'root',
})
export class CoreServiceService {
  private apiBase: string = 'https://test.wertkt.com/api/';

  constructor(private httpClient: HttpClient) {}

  _get(endPoint: string): Observable<any> {
    return this.httpClient.get(this.apiBase + endPoint);
  }
}
