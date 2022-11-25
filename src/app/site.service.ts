import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Site } from './site.model';

const apiUrl = 'http://localhost:3000/sites';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private http: HttpClient) {}

  // httpリンクを呼び出すメソッド
  getSites(): Observable<Site[]> {
    return this.http.get<Site[]>(apiUrl);
  }

  getSite(id: string): Observable<Site> {
    return this.http.get<Site>(`${apiUrl}/${id}`);
  }

  createSite(siteInfo: Site): Observable<Site> {
    const body = JSON.stringify(siteInfo);
    return this.http.post<Site>(apiUrl, body, httpOptions);
  }

  updateSite(id: string, siteInfo: Site ): Observable<Site> {
    const body = JSON.stringify(siteInfo);
    return this.http.put<Site>(`${apiUrl}/${id}`, body, httpOptions);
  }

  deleteSite(id: number) {
    return this.http.delete(`${apiUrl}/${id}`);
  }
}
